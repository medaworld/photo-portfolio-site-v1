import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  BarHeader,
  CloseIcon,
  DetailBar,
  FormDescription,
} from '../../../styles/components/Desktop/Admin/AdminMain';
import FormDate from '../UI/FormDate';
import FormSelect from '../UI/FormSelect';
import Icon from '../UI/Icon';

import closeIcon from '/public/icons/closeWindow.png';

export default function DetailSideBar({
  detailSidebarClose,
  selectedItems,
}: {
  detailSidebarClose: () => void;
  selectedItems: any[];
}) {
  const { fetchFirestore } = useFirestore();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>();
  const [selectedDescription, setSelectedDescription] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [categorySelection, setCategorySelection] = useState<any[]>();
  const [subcategorySelection, setSubcategorySelection] = useState<any[]>();
  let selectedDetail;

  useEffect(() => {
    if (selectedItems[0]?.description) {
      setSelectedCategory(selectedItems[0].category);
      setSelectedSubcategory(selectedItems[0].subcategory);
      setSelectedDescription(selectedItems[0].description);
      setSelectedDate(selectedItems[0].dateTaken.toDate());
    } else if (selectedItems[0]?.subcategory) {
      setSelectedCategory(selectedItems[0].category);
      setSelectedSubcategory(selectedItems[0].subcategory);
    } else if (selectedItems[0]?.category) {
      setSelectedCategory(selectedItems[0].category);
    }
  }, [selectedItems]);

  const catChangeHandler = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const subCatChangeHandler = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const dateChangeHandler = (date: Date) => {
    setSelectedDate(date);
  };

  let categories: any[] = [];
  let subcategories: any[] = [];

  useEffect(() => {
    fetchFirestore('categories').then((docs) =>
      docs.map((doc) => {
        categories.push(doc.category);
      })
    );
    setCategorySelection(categories);
  }, []);

  useEffect(() => {
    fetchFirestore('subcategories', 'category', selectedCategory).then((docs) =>
      docs.map((doc) => {
        subcategories.push(doc.subcategory);
      })
    );
    setSubcategorySelection(subcategories);
  }, [selectedCategory]);

  return (
    <DetailBar>
      <BarHeader>
        <CloseIcon onClick={detailSidebarClose}>
          <Icon img={closeIcon.src} size={30} />
        </CloseIcon>
      </BarHeader>
      {selectedCategory && (
        <FormSelect
          options={categorySelection!}
          placeholder={'Select a category'}
          onChange={catChangeHandler}
          selected={selectedCategory}
          disabled={false}
        />
      )}
      {selectedSubcategory && (
        <FormSelect
          options={subcategorySelection!}
          placeholder={'Select a subcategory'}
          onChange={catChangeHandler}
          selected={selectedSubcategory}
          disabled={false}
        />
      )}
      {selectedDate && (
        <FormDate onChange={dateChangeHandler} selectedDate={selectedDate} />
      )}
      {selectedDescription && (
        <FormDescription
          placeholder="Write a description"
          value={selectedDescription}
        />
      )}
    </DetailBar>
  );
}
