import FormSelectAddNew from '../../UI/FormSelectAddNew';
import firestoreOperations from '../../../../helpers/functions/firestore';
import useFirestore from '../../../../helpers/hooks/useFirestore';

export default function FormSubcategory({
  selectedCategory,
  selectedSubcategory,
  onChange,
}: {
  selectedCategory: string;
  selectedSubcategory: string;
  onChange: (subcategory: string) => void;
}) {
  const { addSubCategory } = firestoreOperations();
  const { docs: subcategories } = useFirestore(
    'subcategories',
    'category',
    selectedCategory,
    'subcategory',
    'asc'
  );

  let options = subcategories?.map((doc) => {
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
