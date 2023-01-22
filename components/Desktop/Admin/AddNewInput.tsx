import { SetStateAction, useState } from 'react';
import {
  AddCategoryContainer,
  CategoryAddButton,
  CategoryInput,
} from '../../../styles/components/Desktop/Admin/Categories';

function AddNewInput({
  type,
  handler,
}: {
  type: string;
  handler: (input: string) => void;
}) {
  const [input, setInput] = useState<string>('');
  const placeholder = `New ${type.toLocaleLowerCase()}...`;

  const changeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    handler(input);
  };

  return (
    <AddCategoryContainer>
      <CategoryInput placeholder={placeholder} onChange={changeHandler} />
      <CategoryAddButton onClick={clickHandler}>Add {type}</CategoryAddButton>
    </AddCategoryContainer>
  );
}

export default AddNewInput;
