import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  CategorySection,
  CategorySelection,
} from '../../../styles/components/Desktop/Admin/Categories';
import AddNewInput from './AddNewInput';

function SubCategoriesSection() {
  const { docs, addSubCategory } = useFirestore('categories');
  console.log(docs);

  const submitHandler = (input: string) => {
    addSubCategory(input);
  };
  return (
    <CategorySection>
      <CategorySelection size={20}>
        <option>Concert</option>
        <option>Portrait</option>
        <option>People</option>
      </CategorySelection>
      <AddNewInput type={'Subcategory'} handler={submitHandler} />
    </CategorySection>
  );
}
export default SubCategoriesSection;
