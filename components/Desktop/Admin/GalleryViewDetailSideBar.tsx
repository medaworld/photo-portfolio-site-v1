import { SetStateAction, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  DetailBar,
  FormDescription,
} from '../../../styles/components/Desktop/Admin/GalleryView';
import { Images } from '../../../helpers/organizers/types';
import useStorage from '../../../helpers/hooks/useStorage';
import useFirestore from '../../../helpers/hooks/useFirestore';

import DeleteOverlay from '../UI/DeleteOverlay';
import FormDate from '../UI/FormDate';
import Button from '../UI/Button';

import FormSubcategory from './Upload/FormSubcategory';
import FormCategory from './Upload/FormCategory';
import DetailSideBarHeader from './DetailSideBarHeader';

export default function GalleryViewDetailSideBar({
  detailSidebarClose,
  selectedImages,
}: {
  detailSidebarClose: () => void;
  selectedImages: Images;
}) {
  const { updateImage } = useFirestore();
  const { deleteFile } = useStorage();
  const { colors } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDescription, setSelectedDescription] = useState<string>();
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);

  useEffect(() => {
    if (selectedImages[0]) {
      setSelectedCategory(selectedImages[0].category);
      setSelectedSubcategory(selectedImages[0].subcategory);
      setSelectedDate(selectedImages[0].dateTaken.toDate());
      setSelectedDescription(selectedImages[0].description);
    }
  }, [selectedImages]);

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

  // Set Show
  const showFormHandler = () => {
    setShowUploadOverlay(true);
  };

  const hideFormHandler = () => {
    setShowUploadOverlay(false);
  };

  // Update
  function updateHandler() {
    for (let i = 0; i < selectedImages.length; i++) {
      updateImage(
        selectedImages[i].id,
        selectedDescription,
        selectedCategory,
        selectedSubcategory,
        selectedDate!,
        selectedImages[i].url,
        selectedImages[i].timeCreated
      );
    }
    detailSidebarClose();
  }

  // Delete
  function deleteHandler() {
    setShowUploadOverlay(false);
    for (let i = 0; i < selectedImages.length; i++) {
      deleteFile(selectedImages[i].url, selectedImages[i].id);
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
          name={selectedImages[0].category}
        />
      )}
      <DetailSideBarHeader detailSidebarClose={detailSidebarClose} />
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
