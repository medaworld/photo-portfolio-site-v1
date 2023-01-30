import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import {
  AdminMainPage,
  CenterWrapper,
} from '../../styles/components/Desktop/Admin/Admin';
import { Category } from '../../helpers/organizers/types';
import useFirestore from '../../helpers/hooks/useFirestore';

import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import CategoryDetailSidebar from '../../components/Desktop/Admin/ListViewDetailSidebar';
import ListView from '../../components/Desktop/Admin/ListView';
import Loader from '../../components/Desktop/UI/Loader';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { projectFirestore } from '../../helpers/firebase/config';

export default function AdminCategoriesPage({ categories }) {
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
        docs={categories}
        type={'category'}
        selectedItem={selectedCategory}
        setSelectedItem={setSelectedCategory}
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
  let categories: any = [];

  try {
    const q = query(
      collection(projectFirestore, 'categories'),
      orderBy('category', 'asc')
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      categories.push({
        category: data.category,
        id: data.id,
        coverImg: data.coverImg,
      });
    });
  } catch (err) {
    console.log(err);
  }

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
    props: { session, categories },
  };
}
