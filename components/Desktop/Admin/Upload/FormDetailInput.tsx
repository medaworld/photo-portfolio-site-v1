import { doc } from 'firebase/firestore';
import { SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Error } from '../../../../helpers/organizers/types';
import {
  Divider,
  FormButton,
  FormDescription,
  FormError,
  ImageDetail,
} from '../../../../styles/components/Desktop/Admin/Upload';
import FormDate from '../../UI/FormDate';
import FormSelectAddNew from '../../UI/FormSelectAddNew';
import FormSubcategory from './FormSubcategory';

function FormDetailInput({
  submitHandler,
  error,
  selectedDetail,
  detailChangeHandler,
}: {
  submitHandler: () => void;
  error: Error;
  selectedDetail: any;
  detailChangeHandler: (newData: any) => void;
}) {
  const [selectedDesc, setSelectedDesc] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [fetchedDocs, setFetchedDocs] = useState<string[]>([]);
  const { docs, addCategory } = useFirestore(
    'categories',
    null,
    null,
    'category',
    'asc'
  );

  const options = docs?.map((doc) => {
    return doc.category;
  });

  const descChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedDesc(event.target.value);
  };

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

  useEffect(() => {
    if (selectedDetail) {
      const newData = {
        description: selectedDesc,
        category: selectedCategory,
        subcategory: selectedSubcategory,
        dateTaken: selectedDate,
      };

      detailChangeHandler(newData);
    }
  }, [selectedDesc, selectedCategory, selectedSubcategory, selectedDate]);

  useEffect(() => {
    if (selectedDetail) {
      const timer = setTimeout(() => {
        const newData = {
          ...selectedDetail,
          description: selectedDesc,
          category: selectedCategory,
          subcategory: selectedSubcategory,
          dateTaken: selectedDate,
        };

        detailChangeHandler(newData);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [selectedDesc, selectedCategory, selectedSubcategory, selectedDate]);

  function newCategoryHandler(input: string) {
    addCategory(input);
    catChangeHandler(input);
  }

  const formSubcategory = (
    <>
      <FormSubcategory
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onChange={subCatChangeHandler}
      />
      <Divider />
    </>
  );

  return (
    <ImageDetail>
      <FormDescription
        placeholder="Write a description"
        value={selectedDesc}
        onChange={descChangeHandler}
      />
      <Divider />
      <FormSelectAddNew
        options={options}
        placeholder={'Select a category'}
        onChange={catChangeHandler}
        selected={selectedCategory}
        onAddNew={newCategoryHandler}
        type={'Category'}
      />
      <Divider />
      {selectedCategory && formSubcategory}
      <FormDate
        onChange={dateChangeHandler}
        selectedDate={selectedDetail?.dateTaken}
      />
      <Divider />
      {error && <FormError>{error}</FormError>}
      <FormButton onClick={submitHandler}>Upload Image(s)</FormButton>
    </ImageDetail>
  );
}

export default FormDetailInput;
