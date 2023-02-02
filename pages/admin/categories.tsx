import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { AdminMainPage } from '../../styles/components/Desktop/Admin/Admin';

import AdminSideBar from '../../components/Desktop/Admin/Shared/AdminSideBar';
import Loader from '../../components/Desktop/UI/Loader';
import AdminCategoryList from '../../components/Desktop/Admin/Categories/AdminCategoryList';

export default function AdminCategoriesPage() {
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
      <AdminCategoryList />
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
