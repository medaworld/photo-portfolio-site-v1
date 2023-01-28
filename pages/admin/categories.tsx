import { useEffect, useState } from 'react';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import CategoryDetailSidebar from '../../components/Desktop/Admin/CategoryDetailSidebar';
import ListView from '../../components/Desktop/Admin/ListView';
import useFirestore from '../../helpers/hooks/useFirestore';

import { AdminMainPage } from '../../styles/components/Desktop/Admin/AdminMain';

export default function AdminSubcategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const [fetchedDocs, setFetchedDocs] = useState<any[]>();
  const { fetchFirestore } = useFirestore();
  useEffect(() => {
    fetchFirestore('subcategories', null, null, 'category', 'asc').then(
      (docs) => setFetchedDocs(docs)
    );
  }, []);

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

  return (
    <AdminMainPage>
      <AdminSideBar />
      <ListView
        docs={fetchedDocs}
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
