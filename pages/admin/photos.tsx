import { useEffect, useState } from 'react';
import GalleryView from '../../components/Desktop/Admin/GalleryView';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import PhotosDetailSideBar from '../../components/Desktop/Admin/PhotosDetailSideBar';
import useFirestore from '../../helpers/hooks/useFirestore';
import {
  AdminMainPage,
  CenterWrapper,
} from '../../styles/components/Desktop/Admin/Admin';
import { getSession } from 'next-auth/react';
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

  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const { docs } = useFirestore(
    'images',
    'category',
    selectedCategory?.category,
    'timeCreated',
    'desc'
  );

  useEffect(() => {
    if (selectedItems.length > 0) {
      setShowDetailSidebar(true);
    } else {
      setShowDetailSidebar(false);
    }
  }, [selectedItems]);

  const itemSelectHandler = (doc: any) => {
    if (selectedItems.includes(doc)) {
      setSelectedItems(() => {
        return selectedItems.filter((item) => item !== doc);
      });
    } else {
      setSelectedItems(() => {
        return [...selectedItems, doc];
      });
    }
  };

  const detailSidebarClose = () => {
    setShowDetailSidebar(false);
    setSelectedItems([]);
  };

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
        fetchedDocs={docs}
        selectedItems={selectedItems}
        onItemSelect={itemSelectHandler}
        categorySelection={selectedCategory}
        setCategorySelection={setSelectedCategory}
      />
      {showDetailSidebar && (
        <PhotosDetailSideBar
          detailSidebarClose={detailSidebarClose}
          selectedItems={selectedItems}
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
