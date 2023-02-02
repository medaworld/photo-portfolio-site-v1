import { useEffect, useState } from 'react';

import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Subcategory } from '../../../../helpers/organizers/types';

import ListView from '../Shared/ListView';
import ListViewDetailSidebar from '../Shared/ListViewDetailSidebar';

export default function AdminSubCategoryList() {
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<Subcategory>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);

  const { docs: subcategories } = useFirestore(
    'subcategories',
    'category',
    selectedCategory,
    'subcategory',
    'asc'
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

  return (
    <>
      <ListView
        docs={subcategories}
        type="subcategory"
        selectedItem={selectedSubcategory}
        setSelectedItem={setSelectedSubcategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {showDetailSidebar && (
        <ListViewDetailSidebar
          type="subcategory"
          selectedItem={selectedSubcategory}
          detailSidebarClose={detailSidebarClose}
        />
      )}
    </>
  );
}
