import { useEffect, useState } from 'react';
import { AdminMainPage } from '../../styles/components/Desktop/Admin/Admin';

import AdminSideBar from '../../components/Desktop/Admin/Shared/AdminSideBar';
import AdminGallery from '../../components/Desktop/Admin/Photos/AdminGallery';
import Loader from '../../components/Desktop/UI/Loader';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export default function AdminPhotosPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = '/work';
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <AdminMainPage>
      <AdminSideBar />
      <AdminGallery />
    </AdminMainPage>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/work',
        permanent: false,
      },
    };
  }
  return {
    props: { session: JSON.stringify(session) },
  };
}
