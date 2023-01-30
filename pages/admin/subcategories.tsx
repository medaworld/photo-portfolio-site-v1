import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  AdminMainPage,
  CenterWrapper,
} from '../../styles/components/Desktop/Admin/Admin';
import useFirestore from '../../helpers/hooks/useFirestore';
import { Category, Subcategory } from '../../helpers/organizers/types';

import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import ListViewDetailSidebar from '../../components/Desktop/Admin/ListViewDetailSidebar';
import ListView from '../../components/Desktop/Admin/ListView';
import Loader from '../../components/Desktop/UI/Loader';

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

  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<Subcategory>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const { docs } = useFirestore(
    'subcategories',
    'category',
    selectedCategory?.category
  );

  useEffect(() => {
    if (selectedSubcategory) {
      setShowDetailSidebar(true);
    } else {
      setShowDetailSidebar(false);
    }
  }, [selectedSubcategory]);

  function detailSidebarClose() {
    setShowDetailSidebar(false);
    setSelectedSubcategory(null);
  }

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
        type="subcategory"
        selectedItem={selectedSubcategory}
        setSelectedItem={setSelectedSubcategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {showDetailSidebar && (
        <ListViewDetailSidebar
          type="subcategory"
          selectedCategory={selectedSubcategory}
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
