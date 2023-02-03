import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { AdminMainPage } from '../../styles/components/Desktop/Admin/Admin';

import AdminSideBar from '../../components/Desktop/Admin/Shared/AdminSideBar';
import Loader from '../../components/Desktop/UI/Loader';
import AdminSubCategoryList from '../../components/Desktop/Admin/Subcategories/AdminSubcategoryList';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

export default function AdminSubcategoriesPage() {
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
      <AdminSubCategoryList />
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
