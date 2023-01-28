import { useState } from 'react';
import CategoriesSection from '../../components/Desktop/Admin/Categories/CategoriesSection';
import CategoryDetails from '../../components/Desktop/Admin/Categories/CategoryDetails';
import SubCategoriesSection from '../../components/Desktop/Admin/Categories/SubCategoriesSection';
import SubCategoryDetails from '../../components/Desktop/Admin/Categories/SubCategoryDetails';
import UploadButton from '../../components/Desktop/Admin/Upload/UploadButton';
import UploadOverlay from '../../components/Desktop/Admin/Upload/UploadOverlay';
import { Category, Subcategory } from '../../helpers/organizers/types';
import {
  Categories,
  CategoriesPage,
  Subcategories,
} from '../../styles/components/Desktop/Admin/Categories';

export default function AdminCategories() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const [selectedSubCategory, setSelectedSubCategory] =
    useState<Subcategory | null>(null);

  const categorySelectHandler = (selected: Category | null) => {
    setSelectedCategory(selected);
    setSelectedSubCategory(null);
  };

  const subcategorySelectHandler = (selected: Subcategory | null) => {
    setSelectedSubCategory(selected);
  };

  const [showUploadOverlay, setShowUploadOverlay] = useState(false);

  const showFormHandler = () => {
    setShowUploadOverlay(true);
  };

  const hideFormHandler = () => {
    setShowUploadOverlay(false);
  };

  return (
    <CategoriesPage>
      <Categories>
        <CategoriesSection handler={categorySelectHandler} />
        {selectedCategory && (
          <CategoryDetails selectedCategory={selectedCategory} />
        )}
      </Categories>
      {selectedCategory && (
        <Subcategories>
          <SubCategoriesSection
            selectedCategory={selectedCategory}
            handler={subcategorySelectHandler}
          />
          {selectedSubCategory && (
            <SubCategoryDetails selectedSubCategory={selectedSubCategory} />
          )}
        </Subcategories>
      )}
      {/* {showUploadOverlay && <UploadOverlay onClose={hideFormHandler} />}
      <UploadButton onShowForm={showFormHandler} /> */}
    </CategoriesPage>
  );
}
