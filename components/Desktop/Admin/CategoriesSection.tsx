import { SetStateAction } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  CategorySection,
  CategorySelection,
  Title,
} from '../../../styles/components/Desktop/Admin/Categories';
import AddNewInput from './AddNewInput';

function CategoriesSection({
  handler,
}: {
  handler: (selected: string) => void;
}) {
  const { docs, addCategory } = useFirestore('categories');

  const submitHandler = (input: string) => {
    addCategory(input);
  };

  const changeHandler = (event: { target: { value: string } }) => {
    handler(event.target.value);
  };

  return (
    <CategorySection>
      <Title>Categories</Title>
      <CategorySelection size={20} onChange={changeHandler}>
        {docs?.map((doc, key) => {
          return <option key={key}>{doc.category}</option>;
        })}
      </CategorySelection>
      <AddNewInput type={'Category'} handler={submitHandler} />
    </CategorySection>
  );
}
export default CategoriesSection;
