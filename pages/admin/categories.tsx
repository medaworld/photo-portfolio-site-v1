import { SetStateAction, useState } from 'react';
import CategoriesSection from '../../components/Desktop/Admin/CategoriesSection';
import CategoryDetails from '../../components/Desktop/Admin/CategoryDetails';
import SubCategoriesSection from '../../components/Desktop/Admin/SubCategoriesSection';
import useFirestore from '../../helpers/hooks/useFirestore';
import { CategoriesPage } from '../../styles/components/Desktop/Admin/Categories';

export default function AdminCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);

  const categorySelectHandler = (selected: string) => {
    setSelectedCategory(selected);
  };

  return (
    <CategoriesPage>
      <CategoriesSection handler={categorySelectHandler} />
      {selectedCategory && (
        <CategoryDetails selectedCategory={selectedCategory} />
      )}
      {/* <SubCategoriesSection /> */}
    </CategoriesPage>
  );
}
