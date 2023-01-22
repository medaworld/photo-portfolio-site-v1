import { useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  CategoryDetailSection,
  CategoryInput,
  Title,
} from '../../../styles/components/Desktop/Admin/Categories';
import AddNewInput from './AddNewInput';
import SelectCover from './SelectCover';

function CategoryDetails({ selectedCategory }: { selectedCategory: string }) {
  const [categoryName, setCategoryName] = useState('');
  const { docs } = useFirestore('categories', selectedCategory);
  let cat;
  if (docs) {
    cat = docs[0].category;
  }

  return (
    <CategoryDetailSection>
      <Title>Category Detail</Title>
      <CategoryInput placeholder="Enter category name" value={cat} />
      <SelectCover selectedCategory={selectedCategory} />
    </CategoryDetailSection>
  );
}
export default CategoryDetails;
