import { useContext, useEffect, useRef, useState } from 'react';
import { getSession, signIn } from 'next-auth/react';
import { CenterWrapper } from '../../styles/components/Desktop/Admin/Admin';
import { useRouter } from 'next/router';
import Loader from '../../components/Desktop/UI/Loader';
import Button from '../../components/Desktop/UI/Button';
import NotificationContext from '../../context/notificationContext';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

export default function SignInPage() {
  const notificationCtx = useContext(NotificationContext);
  const [isLoading, setIsLoading] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/admin/photos');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  async function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail!,
        password: enteredPassword!,
      });

      if (!result?.error) {
        notificationCtx.showNotification({
          title: 'Success',
          message: 'Successfully logged in!',
          status: 'success',
        });
        router.replace('/admin/photos');
      } else {
        notificationCtx.showNotification({
          title: 'Error',
          message: 'Unauthorized access',
          status: 'error',
        });
        router.replace('/');
      }
    } catch (error) {
      console.log('error');
    }
  }

  if (isLoading) {
    return (
      <CenterWrapper>
        <Loader />
      </CenterWrapper>
    );
  }

  return (
    <CenterWrapper>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailInputRef}></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordInputRef}></input>
        <Button text={'Submit'} onClick={() => {}} />
      </form>
    </CenterWrapper>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/admin/photos',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
