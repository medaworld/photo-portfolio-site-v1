import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { capitalizeFirstLetter } from '../../../../helpers/functions/strings';
import { Category, Subcategory } from '../../../../helpers/organizers/types';

import { DetailBar } from '../../../../styles/components/Desktop/Admin/ListView';

import DeleteOverlay from '../../UI/DeleteOverlay';
import SelectCover from './SelectCover';
import Button from '../../UI/Button';
import FormInput from '../../UI/FormInput';
import DetailSideBarHeader from './DetailSideBarHeader';

import useFirestore from '../../../../helpers/hooks/useFirestore';
import firestoreOperations from '../../../../helpers/functions/firestore';
import FormSelectAddNew from '../../UI/FormSelectAddNew';
import notificationOperations from '../../../../helpers/functions/notification';

export default function ListViewDetailSidebar({
  type,
  selectedItem,
  detailSidebarClose,
}: {
  type: string;
  selectedItem: Category | Subcategory | any;
  detailSidebarClose: () => void;
}) {
  const {
    deleteCategory,
    deleteSubCategory,
    updateCategory,
    updateSubCategory,
    addCategory,
  } = firestoreOperations();
  const { errorInvalid } = notificationOperations();
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    img: '',
  });

  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      if (type === 'category') {
        setFormData({
          title: selectedItem.category,
          category: undefined,
          img: selectedItem.coverImg,
        });
      } else {
        setFormData({
          title: selectedItem.subcategory,
          category: selectedItem.category,
          img: selectedItem.coverImg,
        });
      }
    }
  }, [selectedItem]);

  // Form Handlers
  const titleInputChangeHandler = (event: { target: { value: string } }) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const imgChangeHandler = (img: string) => {
    setFormData({ ...formData, img: img });
  };

  function categoryChangeHandler(selected: string) {
    setFormData({ ...formData, category: selected });
  }

  // Set Show
  const showOverlayHandler = () => {
    setShowDeleteOverlay(true);
  };

  const hideOverlayHandler = () => {
    setShowDeleteOverlay(false);
  };

  // Update
  function updateHandler() {
    if (type === 'category') {
      if (
        selectedItem.category !== formData.title &&
        selectedItem.coverImg !== formData.img
      ) {
        updateCategory(selectedItem.id, formData.title, formData.img);
      } else if (formData.title.split(' ').join('').length < 1) {
        errorInvalid('Please enter valid data');
      } else {
        errorInvalid('No changes to update');
      }
    } else {
      if (
        selectedItem.subcategory === formData.title &&
        selectedItem.category === formData.category &&
        selectedItem.coverImg === formData.img
      ) {
        errorInvalid('No changes to update');
      } else if (formData.title.split(' ').join('').length < 1) {
        errorInvalid('Please enter valid data');
      } else {
        updateSubCategory(
          selectedItem.id,
          formData.category,
          formData.title,
          formData.img
        );
      }
    }
  }

  // Delete
  function deleteHandler() {
    type === 'category'
      ? deleteCategory(selectedItem.id)
      : deleteSubCategory(selectedItem.id);
    setShowDeleteOverlay(false);
    setFormData({ title: '', category: '', img: '' });
    detailSidebarClose();
  }

  function addNewHandler(input: string) {
    addCategory(input);
    setFormData({
      ...formData,
      category: input,
    });
  }

  const { docs: categories } = useFirestore('categories');
  const options = categories?.map((category) => {
    return category.category;
  });
  const categorySelect = (
    <FormSelectAddNew
      options={options}
      placeholder={'Select a category...'}
      selected={formData.category}
      onChange={categoryChangeHandler}
      onAddNew={addNewHandler}
      type={'category'}
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
              ? selectedItem.category
              : selectedItem.subcategory
          }
        />
      )}
      <DetailSideBarHeader
        detailSidebarClose={detailSidebarClose}
        title={`${capitalizeFirstLetter(type)} Detail`}
      />
      <FormInput
        placeholder={`Enter ${type} name`}
        value={formData.title}
        onChange={titleInputChangeHandler}
      />
      {type === 'subcategory' && categorySelect}
      <SelectCover
        formTitle={formData.title}
        selectedTitle={
          type === 'category' ? selectedItem.category : selectedItem.subcategory
        }
        onImgChange={imgChangeHandler}
        enteredImg={formData.img}
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
