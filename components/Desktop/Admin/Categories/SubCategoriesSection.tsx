import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Category, Subcategory } from '../../../../helpers/organizers/types';
import {
  CategorySection,
  Selection,
  Title,
} from '../../../../styles/components/Desktop/Admin/Categories';
import AddNewInput from '../AddNewInput';

function SubCategoriesSection({
  selectedCategory,
  handler,
}: {
  selectedCategory: Category;
  handler: (selected: Subcategory) => void;
}) {
  const { docs, addSubCategory } = useFirestore(
    'subcategories',
    selectedCategory.category,
    'category'
  );
  console.log(selectedCategory);

  const submitHandler = (input: string) => {
    addSubCategory(selectedCategory.category, input);
  };

  const changeHandler = (event: { target: { value: string } }) => {
    const selectedSubcategory = docs?.filter((doc) => {
      return event.target.value == doc.subcategory;
    });
    if (selectedSubcategory) {
      handler(selectedSubcategory[0]);
    }
  };

  return (
    <CategorySection>
      <Title>Subcategories</Title>
      <Selection size={10} onChange={changeHandler}>
        {docs?.map((doc, key) => {
          return <option key={key}>{doc.subcategory}</option>;
        })}
      </Selection>
      <AddNewInput type={'Subcategory'} handler={submitHandler} />
    </CategorySection>
  );
}
export default SubCategoriesSection;
