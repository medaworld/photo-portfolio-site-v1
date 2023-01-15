import { useMemo, useRef } from 'react';
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
  selectedImage,
}: {
  submitHandler: () => void;
  error: Error;
  selectedImage: any;
}) {
  const dateRef = useRef<HTMLInputElement>(null);
  function focusHandler(e: any) {
    if (dateRef.current) {
      dateRef.current.type = 'date';
    }
  }
  const options = categories.map((category) => {
    return category.name;
  });
  let description;
  let date;
  let category;
  let subcategory;
  if (selectedImage) {
    date = selectedImage.dateTaken;
    description = selectedImage.description;
    subcategory = selectedImage.category;
    subcategory = selectedImage.subcategory;
  }

  return (
    <ImageDetail>
      <FormDescription placeholder="Write a description" value={description} />
      <Divider />
      <FormSelect options={options} placeholder={'Select a category'} />
      <Divider />
      <FormInput placeholder="Subcategory (optional)" value={subcategory} />
      <Divider />
      <FormDate />
      <Divider />
      {error && <FormError>{error}</FormError>}
      <FormButton onClick={submitHandler}>Upload Image</FormButton>
    </ImageDetail>
  );
}

export default FormDetailInput;
