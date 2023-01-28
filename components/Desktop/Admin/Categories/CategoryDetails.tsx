import { SetStateAction, useEffect, useState } from 'react';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Category } from '../../../../helpers/organizers/types';
import {
  AddButton,
  CategoryDetailSection,
  CategoryInput,
  DeleteButton,
  Title,
} from '../../../../styles/components/Desktop/Admin/Categories';
import DeleteOverlay from '../../UI/DeleteOverlay';
import SelectCover from './SelectCover';

function CategoryDetails({ selectedCategory }: { selectedCategory: Category }) {
  const { updateCategory, deleteCategory } = useFirestore('categories');
  const [enteredTitle, setEnteredTitle] = useState(selectedCategory.category);
  const [enteredImg, setEnteredImg] = useState(selectedCategory.coverImg);
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);

  const showFormHandler = () => {
    setShowUploadOverlay(true);
  };

  const hideFormHandler = () => {
    setShowUploadOverlay(false);
  };

  useEffect(() => {
    setEnteredTitle(selectedCategory.category);
    setEnteredImg(selectedCategory.coverImg);
  }, [selectedCategory]);

  const titleInputChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredTitle(event.target.value);
  };

  const imgChangeHandler = (img: string) => {
    setEnteredImg(img);
  };

  function updateHandler() {
    updateCategory(selectedCategory.id, enteredTitle, enteredImg);
  }

  function deleteHandler() {
    deleteCategory(selectedCategory.id);
    setShowUploadOverlay(false);
    setEnteredTitle('');
  }

  return (
    <CategoryDetailSection>
      {showUploadOverlay && (
        <DeleteOverlay
          onClose={hideFormHandler}
          onDelete={deleteHandler}
          name={selectedCategory.category}
        />
      )}
      <Title>Category Detail</Title>
      <CategoryInput
        placeholder="Enter category name"
        value={enteredTitle}
        onChange={titleInputChangeHandler}
      />
      <SelectCover
        selectedCategory={selectedCategory}
        onImgChange={imgChangeHandler}
        enteredImg={enteredImg}
      />
      <DeleteButton onClick={showFormHandler}>Delete Category</DeleteButton>
      <AddButton onClick={updateHandler}>Update Category</AddButton>
    </CategoryDetailSection>
  );
}
export default CategoryDetails;
