import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  DetailBar,
  FormDescription,
} from '../../../../styles/components/Desktop/Admin/GalleryView';
import { Images } from '../../../../helpers/organizers/types';
import useStorage from '../../../../helpers/hooks/useStorage';

import DeleteOverlay from '../../UI/DeleteOverlay';
import FormDate from '../../UI/FormDate';
import Button from '../../UI/Button';

import FormSubcategory from '../Upload/FormSubcategory';
import FormCategory from '../Upload/FormCategory';
import DetailSideBarHeader from '../Shared/DetailSideBarHeader';
import firestoreOperations from '../../../../helpers/functions/firestore';
import notificationOperations from '../../../../helpers/functions/notification';

export default function GalleryViewDetailSideBar({
  detailSidebarClose,
  selectedImages,
}: {
  detailSidebarClose: () => void;
  selectedImages: Images;
}) {
  const { errorInvalid } = notificationOperations();
  const { updateImage } = firestoreOperations();
  const { deleteFile } = useStorage();
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    date: undefined,
    description: '',
  });

  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  useEffect(() => {
    if (selectedImages[0]) {
      setFormData({
        category: selectedImages[0].category,
        subcategory: selectedImages[0].subcategory,
        date: selectedImages[0].dateTaken.toDate(),
        description: selectedImages[0].description,
      });
    }
  }, [selectedImages]);

  // Form Handlers
  function categoryChangeHandler(selected: string) {
    setFormData({
      ...formData,
      category: selected,
      subcategory: undefined,
    });
  }

  function subcategoryChangeHandler(selected: string) {
    setFormData({
      ...formData,
      subcategory: selected,
    });
  }

  function dateChangeHandler(selected: Date) {
    setFormData({
      ...formData,
      date: selected,
    });
  }

  function descriptionChangeHandler(event: { target: { value: string } }) {
    setFormData({
      ...formData,
      description: event.target.value,
    });
  }

  // Set Show
  const showFormHandler = () => {
    setShowDeleteOverlay(true);
  };

  const hideFormHandler = () => {
    setShowDeleteOverlay(false);
  };

  // Update
  function updateHandler() {
    if (
      formData.description &&
      formData.category &&
      formData.subcategory &&
      formData.date
    ) {
      for (let i = 0; i < selectedImages.length; i++) {
        updateImage(
          selectedImages[i].id,
          formData.description,
          formData.category,
          formData.subcategory,
          formData.date,
          selectedImages[i].url,
          selectedImages[i].timeCreated
        );
      }
      detailSidebarClose();
    } else {
      errorInvalid('Please enter valid data');
    }
  }

  // Delete
  function deleteHandler() {
    setShowDeleteOverlay(false);
    for (let i = 0; i < selectedImages.length; i++) {
      deleteFile(selectedImages[i].url, selectedImages[i].id);
    }
  }

  const formSubcategory = (
    <FormSubcategory
      selectedCategory={formData.category}
      selectedSubcategory={formData.subcategory}
      onChange={subcategoryChangeHandler}
    />
  );

  return (
    <DetailBar>
      {showDeleteOverlay && (
        <DeleteOverlay
          onClose={hideFormHandler}
          onDelete={deleteHandler}
          name={selectedImages[0].category}
        />
      )}
      <DetailSideBarHeader detailSidebarClose={detailSidebarClose} />
      <FormCategory
        selectedCategory={formData.category}
        onChange={categoryChangeHandler}
      />
      {formData.category && formSubcategory}
      <FormDate onChange={dateChangeHandler} selectedDate={formData.date} />
      <FormDescription
        placeholder="Write a description"
        value={formData.description}
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
