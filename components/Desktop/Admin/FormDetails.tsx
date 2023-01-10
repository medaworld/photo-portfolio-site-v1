import { useMemo, useRef } from 'react';
import { categories } from '../../../helpers/organizers/categories';
import { Error } from '../../../helpers/organizers/types';
import {
  FormButton,
  FormCategory,
  FormDate,
  FormDescription,
  ImageDetail,
} from '../../../styles/components/Desktop/Admin/Upload';

function FormDetails({
  submitHandler,
  error,
}: {
  submitHandler: () => void;
  error: Error;
}) {
  const dateRef = useRef<HTMLInputElement>(null);
  function focusHandler(e: any) {
    if (dateRef.current) {
      dateRef.current.type = 'date';
    }
  }

  return (
    <ImageDetail>
      <FormCategory placeholder="Choose a category">
        <option value="" disabled selected>
          Select a category
        </option>
        {categories.map((category) => {
          return <option>{category.name}</option>;
        })}
      </FormCategory>
      <FormDescription placeholder="Write a description" />
      <FormDate
        type="text"
        placeholder="Date Taken"
        ref={dateRef}
        onFocus={focusHandler}
      />
      {error && <div>{error}</div>}
      <FormButton onClick={submitHandler}>Upload Image</FormButton>
    </ImageDetail>
  );
}

export default FormDetails;
