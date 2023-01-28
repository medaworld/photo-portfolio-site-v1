import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Category } from '../../../../helpers/organizers/types';
import {
  CategorySection,
  Selection,
  Title,
} from '../../../../styles/components/Desktop/Admin/Categories';
import AddNewInput from '../AddNewInput';

function CategoriesSection({
  handler,
}: {
  handler: (selected: Category) => void;
}) {
  const { docs, addCategory } = useFirestore('categories');

  const submitHandler = (input: string) => {
    addCategory(input);
  };

  const changeHandler = (event: { target: { value: string } }) => {
    const selectedCategory = docs?.filter((doc) => {
      return event.target.value == doc.category;
    });
    if (selectedCategory) {
      handler(selectedCategory[0]);
    }
  };

  return (
    <CategorySection>
      <Title>Categories</Title>
      <Selection size={20} onChange={changeHandler}>
        {docs?.map((doc, key) => {
          return <option key={key}>{doc.category}</option>;
        })}
      </Selection>
      <AddNewInput type={'Category'} handler={submitHandler} />
    </CategorySection>
  );
}
export default CategoriesSection;
