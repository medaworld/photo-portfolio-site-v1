import { useEffect, useRef, useState } from 'react';
import { getSession, signIn, useSession } from 'next-auth/react';
import { CenterWrapper } from '../../styles/components/Desktop/Admin/Admin';
import { useRouter } from 'next/router';
import Loader from '../../components/Desktop/UI/Loader';

export default function SignInPage() {
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
        router.replace('/admin/photos');
      } else {
        alert('UNAUTHORIZED');
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
        <button>Submit</button>
      </form>
    </CenterWrapper>
  );
}
