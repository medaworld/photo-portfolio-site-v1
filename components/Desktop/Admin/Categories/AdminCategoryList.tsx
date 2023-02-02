import { useEffect, useState } from 'react';

import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Category } from '../../../../helpers/organizers/types';
import ListView from '../Shared/ListView';
import ListViewDetailSidebar from '../Shared/ListViewDetailSidebar';

export default function AdminCategoryList() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);
  const { docs: categories } = useFirestore(
    'categories',
    null,
    null,
    'category',
    'asc'
  );

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
    <>
      <ListView
        docs={categories}
        type={'category'}
        selectedItem={selectedCategory}
        setSelectedItem={setSelectedCategory}
      />
      {showDetailSidebar && (
        <ListViewDetailSidebar
          type={'category'}
          selectedItem={selectedCategory}
          detailSidebarClose={detailSidebarClose}
        />
      )}
    </>
  );
}
