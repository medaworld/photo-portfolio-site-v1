import { useEffect, useState } from 'react';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import {
  PrimaryButton,
  BarHeader,
  CloseIcon,
  DeleteButton,
  DetailBar,
  FormDescription,
} from '../../../../styles/components/Desktop/Admin/AdminMain';
import DeleteOverlay from '../../UI/DeleteOverlay';
import FormDate from '../../UI/FormDate';
import FormSelect from '../../UI/FormSelect';
import FormSelectAddNew from '../../UI/FormSelectAddNew';
import Icon from '../../UI/Icon';
import CategorySelector from './CategorySelector';

import closeIcon from '/public/icons/closeWindow.png';

export default function PhotosDetailSideBar({
  detailSidebarClose,
  selectedItems,
}: {
  detailSidebarClose: () => void;
  selectedItems: any[];
}) {
  const { fetchFirestore } = useFirestore();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDescription, setSelectedDescription] = useState<string>();
  const [subcategorySelection, setSubcategorySelection] = useState<any[]>();
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);

  useEffect(() => {
    if (selectedItems[0]) {
      setSelectedCategory(selectedItems[0].category);
      setSelectedSubcategory(selectedItems[0].subcategory);
      setSelectedDate(selectedItems[0].dateTaken.toDate());
      setSelectedDescription(selectedItems[0].description);
    }
  }, [selectedItems]);

  useEffect(() => {
    let subcategories: any[] = [];
    fetchFirestore('subcategories', 'category', selectedCategory).then(
      (docs) => {
        docs.map((doc) => subcategories.push(doc.subcategory));
      }
    );
    setSubcategorySelection(subcategories);
  }, [selectedCategory]);

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

  const showFormHandler = () => {
    setShowUploadOverlay(true);
  };

  const hideFormHandler = () => {
    setShowUploadOverlay(false);
  };
  function updateHandler() {}

  function deleteHandler() {
    setShowUploadOverlay(false);
  }

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
      <CategorySelector
        selectedCategory={selectedCategory}
        categoryChangeHandler={categoryChangeHandler}
      />
      <FormSelectAddNew
        options={subcategorySelection!}
        placeholder={'Select a subcategory'}
        onChange={subcategoryChangeHandler}
        selected={selectedSubcategory}
        onAddNew={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
        type={''}
      />
      <FormDate onChange={dateChangeHandler} selectedDate={selectedDate} />
      <FormDescription
        placeholder="Write a description"
        value={selectedDescription}
      />
      <DeleteButton onClick={showFormHandler}>Delete</DeleteButton>
      <PrimaryButton onClick={updateHandler}>Update</PrimaryButton>
    </DetailBar>
  );
}
