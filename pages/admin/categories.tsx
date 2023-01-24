import { useState } from 'react';
import CategoriesSection from '../../components/Desktop/Admin/CategoriesSection';
import CategoryDetails from '../../components/Desktop/Admin/CategoryDetails';
import SubCategoriesSection from '../../components/Desktop/Admin/SubCategoriesSection';
import SubCategoryDetails from '../../components/Desktop/Admin/SubCategoryDetails';
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
    </CategoriesPage>
  );
}
