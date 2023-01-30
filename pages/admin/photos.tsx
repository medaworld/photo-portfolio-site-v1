import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import {
  AdminMainPage,
  CenterWrapper,
} from '../../styles/components/Desktop/Admin/Admin';
import { Category, Images } from '../../helpers/organizers/types';
import useFirestore from '../../helpers/hooks/useFirestore';

import GalleryView from '../../components/Desktop/Admin/GalleryView';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import GalleryViewDetailSideBar from '../../components/Desktop/Admin/GalleryViewDetailSideBar';
import Loader from '../../components/Desktop/UI/Loader';

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

  const { docs: fetchedImages } = useFirestore(
    'images',
    'category',
    selectedCategory?.category,
    'timeCreated',
    'desc'
  );

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
        fetchedImages={fetchedImages}
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
