import { useEffect, useState } from 'react';
import AdminSideBar from '../../components/Desktop/Admin/AdminSideBar';
import CategoryDetailSidebar from '../../components/Desktop/Admin/CategoryDetailSidebar';
import ListView from '../../components/Desktop/Admin/ListView';
import useFirestore from '../../helpers/hooks/useFirestore';

import { AdminMainPage } from '../../styles/components/Desktop/Admin/AdminMain';

export default function AdminSubcategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<any>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const [fetchedDocs, setFetchedDocs] = useState<any[]>();
  const { fetchFirestore } = useFirestore();

  // Fetch subcategories
  useEffect(() => {
    fetchFirestore(
      'subcategories',
      'category',
      selectedCategory?.category
    ).then((docs) => setFetchedDocs(docs));
  }, [selectedCategory]);

  // Display details
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

  return (
    <AdminMainPage>
      <AdminSideBar />
      <ListView
        docs={fetchedDocs}
        type="subcategory"
        categorySelection={selectedCategory}
        setCategorySelection={setSelectedCategory}
        listSelection={selectedSubcategory}
        setListSelection={setSelectedSubcategory}
      />
      {showDetailSidebar && (
        <CategoryDetailSidebar
          type="subcategory"
          selectedCategory={selectedSubcategory}
          detailSidebarClose={detailSidebarClose}
        />
      )}
    </AdminMainPage>
  );
}
