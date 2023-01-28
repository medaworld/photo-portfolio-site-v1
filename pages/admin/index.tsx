import { useEffect, useState } from 'react';
import GalleryView from '../../components/Desktop/Admin/Photos/GalleryView';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import PhotosDetailSideBar from '../../components/Desktop/Admin/Photos/PhotosDetailSideBar';
import useFirestore from '../../helpers/hooks/useFirestore';
import { AdminMainPage } from '../../styles/components/Desktop/Admin/AdminMain';

export default function AdminPage() {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const { docs } = useFirestore('images', null, null, 'timeCreated', 'desc');

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

  return (
    <AdminMainPage>
      <AdminSideBar />
      <GalleryView
        fetchedDocs={docs}
        selectedItems={selectedItems}
        onItemSelect={itemSelectHandler}
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
