import { SetStateAction, useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../../helpers/functions/strings';
import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  AddButton,
  BarHeader,
  CloseIcon,
  DeleteButton,
  DetailBar,
} from '../../../styles/components/Desktop/Admin/AdminMain';
import {
  CategoryInput,
  Title,
} from '../../../styles/components/Desktop/Admin/Categories';
import Icon from '../UI/Icon';
import SelectCover from './Categories/SelectCover';

import closeIcon from '/public/icons/closeWindow.png';

export default function CategoryDetailSidebar({
  type,
  selectedCategory,
  detailSidebarClose,
}: {
  type: string;
  selectedCategory: any;
  detailSidebarClose: () => void;
}) {
  const [enteredTitle, setEnteredTitle] = useState(selectedCategory.category);
  const [enteredImg, setEnteredImg] = useState(selectedCategory.coverImg);

  useEffect(() => {
    if (selectedCategory) {
      if (type === 'category') {
        setEnteredTitle(selectedCategory.category);
      } else {
        setEnteredTitle(selectedCategory.subcategory);
      }
      setEnteredImg(selectedCategory.imgCover);
    }
  }, [selectedCategory]);

  const titleInputChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredTitle(event.target.value);
  };

  const imgChangeHandler = (img: string) => {
    setEnteredImg(img);
  };
  const showFormHandler = () => {
    // setShowUploadOverlay(true);
  };
  function updateHandler() {
    // updateCategory(selectedCategory.id, enteredTitle, enteredImg);
  }

  return (
    <DetailBar>
      <BarHeader>
        <CloseIcon onClick={detailSidebarClose}>
          <Icon img={closeIcon.src} size={30} />
        </CloseIcon>
        <Title>{capitalizeFirstLetter(type)} Detail</Title>
      </BarHeader>
      <CategoryInput
        placeholder={`Enter ${type} name`}
        value={enteredTitle}
        onChange={titleInputChangeHandler}
      />
      <SelectCover
        selectedCategory={selectedCategory}
        onImgChange={imgChangeHandler}
        enteredImg={enteredImg}
        type={type}
      />
      <DeleteButton onClick={showFormHandler}>{`Delete ${capitalizeFirstLetter(
        type
      )}`}</DeleteButton>
      <AddButton onClick={updateHandler}>{`Update ${capitalizeFirstLetter(
        type
      )}`}</AddButton>
    </DetailBar>
  );
}
