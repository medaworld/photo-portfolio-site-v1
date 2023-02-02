import { SetStateAction, useState } from 'react';
import firestoreOperations from '../../../../helpers/functions/firestore';
import notificationOperations from '../../../../helpers/functions/notification';
import { AddCategoryContainer } from '../../../../styles/components/Desktop/Admin/Admin';
import Button from '../../UI/Button';
import FormInput from '../../UI/FormInput';
import FormCategory from '../Upload/FormCategory';

function AddNewInput({ type }: { type: string }) {
  const [input, setInput] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const placeholder = `New ${type.toLocaleLowerCase()}...`;
  const { addCategory, addSubCategory } = firestoreOperations();
  const { errorInvalid } = notificationOperations();

  const changeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    if (type === 'category') {
      if (input && input.split(' ').join('').length > 0) {
        addCategory(input);
        setInput('');
      } else {
        errorInvalid('Please enter valid data');
        setInput('');
      }
    } else {
      if (selectedCategory && input && input.split(' ').join('').length > 0) {
        addSubCategory(selectedCategory, input);
        setInput('');
      } else {
        errorInvalid('Please enter valid data');
      }
    }
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
