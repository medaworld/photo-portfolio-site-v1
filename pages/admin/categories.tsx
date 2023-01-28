import { useEffect, useState } from 'react';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import CategoryDetailSidebar from '../../components/Desktop/Admin/Categories/CategoryDetailSidebar';
import ListView from '../../components/Desktop/Admin/ListView';
import useFirestore from '../../helpers/hooks/useFirestore';

import { AdminMainPage } from '../../styles/components/Desktop/Admin/AdminMain';

export default function AdminSubcategoriesPage() {
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

  function updateHandler() {}

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
          onUpdate={updateHandler}
        />
      )}
    </AdminMainPage>
  );
}
