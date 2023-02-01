import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

import { AdminMainPage } from '../../styles/components/Desktop/Admin/Admin';

import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import AdminGallery from '../../components/Desktop/Admin/AdminGallery';
import Loader from '../../components/Desktop/UI/Loader';

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

export async function getServerSideProps(context: { req: any }) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/work',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
