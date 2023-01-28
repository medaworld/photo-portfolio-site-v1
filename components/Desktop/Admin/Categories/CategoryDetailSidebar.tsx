import { SetStateAction, useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../../../helpers/functions/strings';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import {
  BarHeader,
  CloseIcon,
  DeleteButton,
  DetailBar,
  PrimaryButton,
} from '../../../../styles/components/Desktop/Admin/AdminMain';
import {
  CategoryInput,
  Title,
} from '../../../../styles/components/Desktop/Admin/Categories';
import DeleteOverlay from '../../UI/DeleteOverlay';
import FormSelect from '../../UI/FormSelect';
import Icon from '../../UI/Icon';
import SelectCover from './SelectCover';

import closeIcon from '/public/icons/closeWindow.png';

export default function CategoryDetailSidebar({
  type,
  selectedCategory,
  detailSidebarClose,
  onUpdate,
}: {
  type: string;
  selectedCategory: any;
  detailSidebarClose: () => void;
  onUpdate: (input: string) => void;
}) {
  const [enteredTitle, setEnteredTitle] = useState(selectedCategory.category);
  const [enteredImg, setEnteredImg] = useState(selectedCategory.coverImg);
  const [enteredCategory, setEnteredCategory] = useState<string>();
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  const { deleteCategory, docs } = useFirestore('categories');

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

  function categoryChangeHandler(selected: string) {
    setEnteredCategory(selected);
  }

  function deleteHandler() {
    deleteCategory(selectedCategory.id);
    setShowDeleteOverlay(false);
    setEnteredTitle('');
    detailSidebarClose();
  }
  function updateHandler() {
    onUpdate(enteredTitle);
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
          name={selectedCategory.category}
        />
      )}
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
      {type === 'subcategory' && categorySelect}
      <SelectCover
        selectedCategory={selectedCategory}
        onImgChange={imgChangeHandler}
        enteredImg={enteredImg}
        type={type}
      />
      <DeleteButton
        onClick={showOverlayHandler}
      >{`Delete ${capitalizeFirstLetter(type)}`}</DeleteButton>
      <PrimaryButton onClick={updateHandler}>{`Update ${capitalizeFirstLetter(
        type
      )}`}</PrimaryButton>
    </DetailBar>
  );
}
