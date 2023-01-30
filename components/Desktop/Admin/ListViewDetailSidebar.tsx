import { SetStateAction, useEffect, useState } from 'react';
import {
  Message,
  Title,
  BarHeader,
  CloseIcon,
  DetailBar,
} from '../../../styles/components/Desktop/Admin/Categories';
import DeleteOverlay from '../UI/DeleteOverlay';
import FormSelect from '../UI/FormSelect';
import Icon from '../UI/Icon';
import SelectCover from './SelectCover';
import { capitalizeFirstLetter } from '../../../helpers/functions/strings';
import useFirestore from '../../../helpers/hooks/useFirestore';

import closeIcon from '/public/icons/closeWindow.png';
import Button from '../UI/Button';
import { useTheme } from 'styled-components';
import FormInput from '../UI/FormInput';

export default function ListViewDetailSidebar({
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
  const [enteredCategory, setEnteredCategory] = useState<string>();
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  const { colors } = useTheme();
  const {
    deleteCategory,
    deleteSubCategory,
    docs,
    updateCategory,
    updateSubCategory,
  } = useFirestore('categories');

  const showOverlayHandler = () => {
    setShowDeleteOverlay(true);
  };

  const hideOverlayHandler = () => {
    setShowDeleteOverlay(false);
  };
  useEffect(() => {
    if (selectedCategory) {
      if (type === 'category') {
        setEnteredTitle(selectedCategory.category);
      } else {
        setEnteredTitle(selectedCategory.subcategory);
        setEnteredCategory(selectedCategory.category);
      }
      setEnteredImg(selectedCategory.coverImg);
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

  function categoryChangeHandler(selected: string) {
    setEnteredCategory(selected);
  }

  function deleteHandler() {
    if (type === 'category') {
      deleteCategory(selectedCategory.id);
    } else {
      deleteSubCategory(selectedCategory.id);
    }
    setShowDeleteOverlay(false);
    setEnteredTitle('');
    detailSidebarClose();
  }

  function updateHandler() {
    if (type === 'category') {
      updateCategory(selectedCategory.id, enteredTitle, enteredImg);
    } else if (type === 'subcategory') {
      updateSubCategory(
        selectedCategory.id,
        enteredCategory!,
        enteredTitle,
        enteredImg
      );
    }
  }

  const options = docs?.map((doc) => {
    return doc.category;
  });

  const categorySelect = (
    <FormSelect
      options={options!}
      placeholder={'Select a category...'}
      selected={enteredCategory}
      onChange={categoryChangeHandler}
    />
  );

  return (
    <DetailBar>
      {showDeleteOverlay && (
        <DeleteOverlay
          onClose={hideOverlayHandler}
          onDelete={deleteHandler}
          name={
            type === 'category'
              ? selectedCategory.category
              : selectedCategory.subcategory
          }
        />
      )}
      <BarHeader>
        <CloseIcon onClick={detailSidebarClose}>
          <Icon img={closeIcon.src} size={30} />
        </CloseIcon>
        <Title>{capitalizeFirstLetter(type)} Detail</Title>
      </BarHeader>
      <FormInput
        placeholder={`Enter ${type} name`}
        value={enteredTitle}
        onChange={titleInputChangeHandler}
      />
      {type === 'subcategory' && categorySelect}
      <SelectCover
        selectedCategory={selectedCategory}
        onImgChange={imgChangeHandler}
        enteredImg={enteredImg}
        type={type}
      />
      <Button
        text={`Delete ${capitalizeFirstLetter(type)}`}
        onClick={showOverlayHandler}
        textColor={colors.error}
      />
      <Button
        text={`Update ${capitalizeFirstLetter(type)}`}
        onClick={updateHandler}
      />
    </DetailBar>
  );
}
