import { useEffect, useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import FormSelect from './FormSelect';

function FormSubcategory({
  selectedCategory,
  selectedSubcategory,
  onChange,
}: {
  selectedCategory: string;
  selectedSubcategory: string;
  onChange: (subcategory: string) => void;
}) {
  const [disabled, setDisabled] = useState(false);
  const { docs } = useFirestore('subcategories', selectedCategory, 'category');
  let options;

  if (selectedCategory) {
    options = docs?.map((doc) => {
      return doc.subcategory;
    });
  } else {
    options = [];
  }

  useEffect(() => {
    if (options.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [options]);

  const catChangeHandler = (subcategory: string) => {
    onChange(subcategory);
  };
  return (
    <FormSelect
      options={options!}
      placeholder={'Select a subcategory'}
      onChange={catChangeHandler}
      selected={selectedSubcategory}
      disabled={disabled}
    />
  );
}

export default FormSubcategory;
