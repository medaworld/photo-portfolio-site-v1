import { SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import { categories } from '../../../helpers/organizers/categories';
import { Error } from '../../../helpers/organizers/types';
import {
  Divider,
  FormButton,
  FormDescription,
  FormError,
  FormInput,
  ImageDetail,
} from '../../../styles/components/Desktop/Admin/Upload';
import FormDate from './FormDate';
import FormSelect from './FormSelect';

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

  const options = categories.map((category) => {
    return category.name;
  });

  const descChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredDesc(event.target.value);
  };

  const catChangeHandler = (category: string) => {
    setEnteredCategory(category);
  };

  const subCatChangeHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredSubCat(event.target.value);
  };

  const dateChangeHandler = (date: Date) => {
    setEnteredDate(date);
  };

  useEffect(() => {
    if (selectedDetail) {
      setEnteredDesc(selectedDetail.description);
      setEnteredCategory(selectedDetail.category);
      setEnteredSubCat(selectedDetail.subcategory);
      setEnteredDate(selectedDetail.dateTaken);
    }
  }, [selectedDetail]);

  useEffect(() => {
    if (selectedDetail) {
      const timer = setTimeout(() => {
        const newData = {
          ...selectedDetail,
          description: enteredDesc,
          category: enteredCategory.toLowerCase(),
          subcategory: enteredSubCat,
          dateTaken: enteredDate,
        };

        detailChangeHandler(newData);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [enteredDesc, enteredCategory, enteredSubCat, enteredDate]);

  return (
    <ImageDetail>
      <FormDescription
        placeholder="Write a description"
        value={enteredDesc}
        onChange={descChangeHandler}
      />
      <Divider />
      <FormSelect
        options={options}
        placeholder={'Select a category'}
        onChange={catChangeHandler}
        selected={enteredCategory}
      />
      <Divider />
      <FormInput
        placeholder="Subcategory (optional)"
        value={enteredSubCat}
        onChange={subCatChangeHandler}
      />
      <Divider />
      <FormDate
        onChange={dateChangeHandler}
        selectedDate={selectedDetail?.dateTaken}
      />
      <Divider />
      {error && <FormError>{error}</FormError>}
      <FormButton onClick={submitHandler}>Upload Image</FormButton>
    </ImageDetail>
  );
}

export default FormDetailInput;
