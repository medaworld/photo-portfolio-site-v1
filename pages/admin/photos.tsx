import { useContext, useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import {
  AdminMainPage,
  CenterWrapper,
} from '../../styles/components/Desktop/Admin/Admin';
import { Category, Images } from '../../helpers/organizers/types';

import GalleryView from '../../components/Desktop/Admin/GalleryView';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import GalleryViewDetailSideBar from '../../components/Desktop/Admin/GalleryViewDetailSideBar';
import Loader from '../../components/Desktop/UI/Loader';
import NotificationContext from '../../context/notificationContext';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { projectFirestore } from '../../helpers/firebase/config';

export default function AdminPhotosPage() {
  const [selectedImages, setSelectedImages] = useState<Images>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);

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

  const [docs, setDocs] = useState<any[]>();
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    try {
      let q = query(
        collection(projectFirestore, 'images'),
        orderBy('timeCreated', 'desc')
      );
      if (selectedCategory) {
        q = query(
          collection(projectFirestore, 'images'),
          where('category', '==', selectedCategory.category),
          orderBy('timeCreated', 'desc')
        );
      }
      onSnapshot(q, (snapshot) => {
        let documents: any[] = [];
        snapshot.docs.forEach((doc) => {
          documents.push({ ...doc.data() });
        });
        setDocs(documents);
      });
    } catch (err) {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error fetching data',
        status: 'error',
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedImages.length > 0) {
      setShowDetailSidebar(true);
    } else {
      setShowDetailSidebar(false);
    }
  }, [selectedImages]);

  function itemSelectHandler(doc: any) {
    if (selectedImages.includes(doc)) {
      setSelectedImages(() => {
        return selectedImages.filter((item) => item !== doc);
      });
    } else {
      setSelectedImages(() => {
        return [...selectedImages, doc];
      });
    }
  }

  function detailSidebarClose() {
    setShowDetailSidebar(false);
    setSelectedImages([]);
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
      <GalleryView
        fetchedImages={docs}
        selectedImages={selectedImages}
        onItemSelect={itemSelectHandler}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {showDetailSidebar && (
        <GalleryViewDetailSideBar
          detailSidebarClose={detailSidebarClose}
          selectedImages={selectedImages}
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
