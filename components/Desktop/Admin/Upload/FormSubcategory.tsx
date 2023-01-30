import useFirestore from '../../../../helpers/hooks/useFirestore';
import FormSelectAddNew from '../../UI/FormSelectAddNew';

export default function FormSubcategory({
  selectedCategory,
  selectedSubcategory,
  onChange,
}: {
  selectedCategory: string;
  selectedSubcategory: string;
  onChange: (subcategory: string) => void;
}) {
  const { addSubCategory, docs } = useFirestore(
    'subcategories',
    'category',
    selectedCategory
  );

  let options = docs?.map((doc) => {
    return doc.subcategory;
  });

  function addNewHandler(input: string) {
    addSubCategory(selectedCategory!, input);
    onChange(input);
  }

  const catChangeHandler = (subcategory: string) => {
    onChange(subcategory);
  };

  return (
    <FormSelectAddNew
      options={options}
      placeholder={'Select a subcategory'}
      onChange={catChangeHandler}
      selected={selectedSubcategory}
      onAddNew={addNewHandler}
      type={'Subcategory'}
    />
  );
}
