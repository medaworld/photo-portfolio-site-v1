import { SetStateAction, useEffect, useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import { Subcategory } from '../../../helpers/organizers/types';
import {
  AddButton,
  CategoryDetailSection,
  CategoryInput,
  DeleteButton,
  Title,
} from '../../../styles/components/Desktop/Admin/Categories';
import DeleteOverlay from '../UI/DeleteOverlay';
import SelectCover from './SelectCover';

function SubCategoryDetails({
  selectedSubCategory,
}: {
  selectedSubCategory: Subcategory;
}) {
  const { updateSubCategory, deleteSubCategory } =
    useFirestore('subcategories');
  const [enteredTitle, setEnteredTitle] = useState(
    selectedSubCategory.subcategory
  );
  const [enteredImg, setEnteredImg] = useState(selectedSubCategory.coverImg);
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);

  const showFormHandler = () => {
    setShowUploadOverlay(true);
  };

  const hideFormHandler = () => {
    setShowUploadOverlay(false);
  };

  useEffect(() => {
    setEnteredTitle(selectedSubCategory.subcategory);
    setEnteredImg(selectedSubCategory.coverImg);
  }, [selectedSubCategory]);

  const titleInputChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredTitle(event.target.value);
  };

  const imgChangeHandler = (img: string) => {
    setEnteredImg(img);
  };

  function updateHandler() {
    updateSubCategory(
      selectedSubCategory.id,
      selectedSubCategory.category,
      enteredTitle,
      enteredImg
    );
  }

  function deleteHandler() {
    deleteSubCategory(selectedSubCategory.id);
    setShowUploadOverlay(false);
    setEnteredTitle('');
  }

  return (
    <CategoryDetailSection>
      {showUploadOverlay && (
        <DeleteOverlay
          onClose={hideFormHandler}
          onDelete={deleteHandler}
          name={selectedSubCategory.subcategory}
        />
      )}
      <Title>Subcategory Detail</Title>
      <CategoryInput
        placeholder="Enter subcategory name"
        value={enteredTitle}
        onChange={titleInputChangeHandler}
      />
      <SelectCover
        selectedSubCategory={selectedSubCategory}
        onImgChange={imgChangeHandler}
        enteredImg={enteredImg}
      />
      <DeleteButton onClick={showFormHandler}>Delete Subcategory</DeleteButton>
      <AddButton onClick={updateHandler}>Update Subcategory</AddButton>
    </CategoryDetailSection>
  );
}
export default SubCategoryDetails;
