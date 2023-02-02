import firestoreOperations from '../../../../helpers/functions/firestore';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import FormSelectAddNew from '../../UI/FormSelectAddNew';

export default function FormCategory({
  selectedCategory,
  onChange,
}: {
  selectedCategory: string | undefined;
  onChange: (subcategory: string) => void;
}) {
  const { addCategory } = firestoreOperations();
  const { docs } = useFirestore('categories', null, null, 'category', 'asc');

  let options = docs?.map((doc) => {
    return doc.category;
  });

  function addNewHandler(input: string) {
    addCategory(input);
    onChange(input);
  }

  const catChangeHandler = (category: string) => {
    onChange(category);
  };

  return (
    <FormSelectAddNew
      options={options}
      placeholder={'Select a category'}
      onChange={catChangeHandler}
      selected={selectedCategory}
      onAddNew={addNewHandler}
      type={'Category'}
    />
  );
}
