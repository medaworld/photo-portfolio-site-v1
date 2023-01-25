import { SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import { Error } from '../../../helpers/organizers/types';
import {
  Divider,
  FormButton,
  FormDescription,
  FormError,
  ImageDetail,
} from '../../../styles/components/Desktop/Admin/Upload';
import FormDate from './FormDate';
import FormSelect from './FormSelect';
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
  const [enteredDesc, setEnteredDesc] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredSubCat, setEnteredSubCat] = useState('');
  const [enteredDate, setEnteredDate] = useState<Date | undefined>(undefined);

  const { docs } = useFirestore('categories');

  const options = docs?.map((doc) => {
    return doc.category;
  });

  const descChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredDesc(event.target.value);
  };

  const catChangeHandler = (category: string) => {
    setEnteredCategory(category);
    setEnteredSubCat('');
  };

  const subCatChangeHandler = (subcategory: string) => {
    setEnteredSubCat(subcategory);
  };

  const dateChangeHandler = (date: Date) => {
    setEnteredDate(date);
  };

  useEffect(() => {
    if (selectedDetail) {
      const newData = {
        description: enteredDesc,
        category: enteredCategory,
        subcategory: enteredSubCat,
        dateTaken: enteredDate,
      };

      detailChangeHandler(newData);
    }
  }, [enteredDesc, enteredCategory, enteredSubCat, enteredDate]);

  // inidividual change
  // useEffect(() => {
  //   if (selectedDetail) {
  //     setEnteredDesc(selectedDetail.description);
  //     setEnteredCategory(selectedDetail.category);
  //     setEnteredSubCat(selectedDetail.subcategory);
  //     setEnteredDate(selectedDetail.dateTaken);
  //   }
  // }, [selectedDetail]);

  // useEffect(() => {
  //   if (selectedDetail) {
  //     const timer = setTimeout(() => {
  //       const newData = {
  //         ...selectedDetail,
  //         description: enteredDesc,
  //         category: enteredCategory,
  //         subcategory: enteredSubCat,
  //         dateTaken: enteredDate,
  //       };

  //       detailChangeHandler(newData);
  //     }, 500);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [enteredDesc, enteredCategory, enteredSubCat, enteredDate]);

  return (
    <ImageDetail>
      <FormDescription
        placeholder="Write a description"
        value={enteredDesc}
        onChange={descChangeHandler}
      />
      <Divider />
      <FormSelect
        options={options!}
        placeholder={'Select a category'}
        onChange={catChangeHandler}
        selected={enteredCategory}
      />
      <Divider />
      <FormSubcategory
        selectedCategory={enteredCategory}
        selectedSubcategory={enteredSubCat}
        onChange={subCatChangeHandler}
      />
      <Divider />
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
