import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import CategoryDetailSidebar from '../../components/Desktop/Admin/Categories/CategoryDetailSidebar';
import ListView from '../../components/Desktop/Admin/Categories/ListView';
import Loader from '../../components/Desktop/UI/Loader';
import useFirestore from '../../helpers/hooks/useFirestore';

import {
  AdminMainPage,
  CenterWrapper,
} from '../../styles/components/Desktop/Admin/Admin';

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

  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const { docs } = useFirestore('categories', null, null, 'category', 'asc');

  const detailSidebarClose = () => {
    setShowDetailSidebar(false);
    setSelectedCategory(null);
  };

  useEffect(() => {
    if (selectedCategory) {
      setShowDetailSidebar(true);
    } else {
      setShowDetailSidebar(false);
    }
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <CenterWrapper>
        <Loader />
      </CenterWrapper>
    );
  }

  return (
    <AdminMainPage>
      <AdminSideBar />
      <ListView
        docs={docs}
        type={'category'}
        listSelection={selectedCategory}
        setListSelection={setSelectedCategory}
      />
      {showDetailSidebar && (
        <CategoryDetailSidebar
          type={'category'}
          selectedCategory={selectedCategory}
          detailSidebarClose={detailSidebarClose}
        />
      )}
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
