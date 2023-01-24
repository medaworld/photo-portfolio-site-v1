import { SetStateAction, useState } from 'react';
import {
  AddButton,
  AddCategoryContainer,
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
    setInput('');
  };

  return (
    <AddCategoryContainer>
      <CategoryInput
        placeholder={placeholder}
        onChange={changeHandler}
        value={input}
      />
      <AddButton onClick={clickHandler}>Add {type}</AddButton>
    </AddCategoryContainer>
  );
}

export default AddNewInput;
