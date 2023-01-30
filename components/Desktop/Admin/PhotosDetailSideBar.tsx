import {
  BarHeader,
  CloseIcon,
  DetailBar,
  FormDescription,
} from '../../../styles/components/Desktop/Admin/Photos';
import { SetStateAction, useEffect, useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import DeleteOverlay from '../UI/DeleteOverlay';
import FormDate from '../UI/FormDate';
import Icon from '../UI/Icon';

import closeIcon from '/public/icons/closeWindow.png';
import useStorage from '../../../helpers/hooks/useStorage';
import FormSubcategory from './Upload/FormSubcategory';
import FormCategory from './Upload/FormCategory';
import Button from '../UI/Button';
import { useTheme } from 'styled-components';

export default function PhotosDetailSideBar({
  detailSidebarClose,
  selectedItems,
}: {
  detailSidebarClose: () => void;
  selectedItems: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<
    string | undefined
  >();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDescription, setSelectedDescription] = useState<string>();
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);
  const { updateImage } = useFirestore();
  const { deleteFile } = useStorage();
  const { colors } = useTheme();

  useEffect(() => {
    if (selectedItems[0]) {
      setSelectedCategory(selectedItems[0].category);
      setSelectedSubcategory(selectedItems[0].subcategory);
      setSelectedDate(selectedItems[0].dateTaken.toDate());
      setSelectedDescription(selectedItems[0].description);
    }
  }, [selectedItems]);

  // Form Handlers
  function categoryChangeHandler(selected: string) {
    setSelectedCategory(selected);
    setSelectedSubcategory(undefined);
  }

  function subcategoryChangeHandler(selected: string) {
    setSelectedSubcategory(selected);
  }

  function dateChangeHandler(selected: Date) {
    setSelectedDate(selected);
  }

  function descriptionChangeHandler(event: {
    target: { value: SetStateAction<string | undefined> };
  }) {
    setSelectedDescription(event.target.value);
  }

  // Set show
  const showFormHandler = () => {
    setShowUploadOverlay(true);
  };

  const hideFormHandler = () => {
    setShowUploadOverlay(false);
  };

  function updateHandler() {
    try {
      for (let i = 0; i < selectedItems.length; i++) {
        updateImage(
          selectedItems[i].id,
          selectedDescription,
          selectedCategory,
          selectedSubcategory,
          selectedDate!,
          selectedItems[i].url,
          selectedItems[i].timeCreated
        );
      }
      detailSidebarClose();
    } catch {
      console.log('Error updating');
    }
  }

  function deleteHandler() {
    setShowUploadOverlay(false);
    try {
      for (let i = 0; i < selectedItems.length; i++) {
        deleteFile(selectedItems[i].url, selectedItems[i].id);
      }
    } catch {
      console.log('Error deleting');
    }
  }

  const formSubcategory = (
    <FormSubcategory
      selectedCategory={selectedCategory}
      selectedSubcategory={selectedSubcategory}
      onChange={subcategoryChangeHandler}
    />
  );

  return (
    <DetailBar>
      {showUploadOverlay && (
        <DeleteOverlay
          onClose={hideFormHandler}
          onDelete={deleteHandler}
          name={selectedItems[0].category}
        />
      )}
      <BarHeader>
        <CloseIcon onClick={detailSidebarClose}>
          <Icon img={closeIcon.src} size={30} />
        </CloseIcon>
      </BarHeader>
      <FormCategory
        selectedCategory={selectedCategory}
        onChange={categoryChangeHandler}
      />
      {selectedCategory && formSubcategory}
      <FormDate onChange={dateChangeHandler} selectedDate={selectedDate} />
      <FormDescription
        placeholder="Write a description"
        value={selectedDescription}
        onChange={descriptionChangeHandler}
      />
      <Button
        text={'Delete'}
        onClick={showFormHandler}
        textColor={colors.error}
      />
      <Button text={'Update'} onClick={updateHandler} />
    </DetailBar>
  );
}
