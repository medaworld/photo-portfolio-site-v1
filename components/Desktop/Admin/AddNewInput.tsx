import { SetStateAction, useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import { AddCategoryContainer } from '../../../styles/components/Desktop/Admin/Categories';
import Button from '../UI/Button';
import FormInput from '../UI/FormInput';
import FormCategory from './Upload/FormCategory';

function AddNewInput({
  type,
}: {
  type: string;
  handler: (input: string) => void;
}) {
  const [input, setInput] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const placeholder = `New ${type.toLocaleLowerCase()}...`;
  const { addCategory, addSubCategory } = useFirestore();

  const changeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    if (type === 'category') {
      addCategory(input);
    } else {
      addSubCategory(selectedCategory, input);
    }
    setInput('');
  };

  function categoryHandler(category: string) {
    setSelectedCategory(category);
  }

  return (
    <AddCategoryContainer>
      {type === 'subcategory' && (
        <FormCategory
          selectedCategory={selectedCategory}
          onChange={categoryHandler}
        />
      )}
      <FormInput
        placeholder={placeholder}
        onChange={changeHandler}
        value={input}
      />
      <Button text={`Add ${type}`} onClick={clickHandler} />
    </AddCategoryContainer>
  );
}

export default AddNewInput;
