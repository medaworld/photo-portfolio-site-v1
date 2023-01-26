import { useEffect, useState } from 'react';
import AdminGallery from '../../components/Desktop/Admin/AdminGallery';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import DetailSideBar from '../../components/Desktop/Admin/DetailSideBar';
import useFirestore from '../../helpers/hooks/useFirestore';
import { AdminMainPage } from '../../styles/components/Desktop/Admin/AdminMain';

export default function AdminPage() {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('');
  const [fetchedDocs, setFetchedDocs] = useState<any[]>();
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const { fetchFirestore } = useFirestore();

  useEffect(() => {
    fetchFirestore(selectedSidebarItem, null, null, 'category', 'asc').then(
      (docs) => setFetchedDocs(docs)
    );
    setSelectedItems([]);
  }, [selectedSidebarItem]);

  useEffect(() => {
    if (selectedItems.length > 0) {
      setShowDetailSidebar(true);
    } else {
      setShowDetailSidebar(false);
    }
  }, [selectedItems]);

  const itemSelectHandler = (doc: any) => {
    if (selectedSidebarItem == 'images') {
      if (selectedItems.includes(doc)) {
        setSelectedItems(() => {
          return selectedItems.filter((item) => item !== doc);
        });
      } else {
        setSelectedItems(() => {
          return [...selectedItems, doc];
        });
      }
    } else {
      if (selectedItems.includes(doc)) {
        setSelectedItems([]);
      } else {
        setSelectedItems(() => {
          return [doc];
        });
      }
    }
  };

  const detailSidebarClose = () => {
    setShowDetailSidebar(false);
    setSelectedItems([]);
  };

  const detailChangeHandler = () => {};

  console.log(selectedItems);

  return (
    <AdminMainPage>
      <AdminSideBar
        selectedSidebarItem={selectedSidebarItem}
        setSelectedSidebarItem={setSelectedSidebarItem}
      />
      <AdminGallery
        fetchedDocs={fetchedDocs}
        selectedItems={selectedItems}
        selectedSidebarItem={selectedSidebarItem}
        onItemSelect={itemSelectHandler}
      />
      {showDetailSidebar && (
        <DetailSideBar
          detailSidebarClose={detailSidebarClose}
          selectedItems={selectedItems}
        />
      )}
    </AdminMainPage>
  );
}
