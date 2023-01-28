import { useEffect, useState } from 'react';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import FormSelect from '../../UI/FormSelect';
import FormSelectAddNew from '../../UI/FormSelectAddNew';

export default function CategorySelector({
  categoryChangeHandler,
  selectedCategory,
}: any) {
  const [categorySelection, setCategorySelection] = useState<any[]>();
  const { fetchFirestore } = useFirestore();
  useEffect(() => {
    let categories: any[] = [];
    fetchFirestore('categories', null, null, 'category', 'asc').then((docs) => {
      docs.map((doc) => categories.push(doc.category));
    });
    setCategorySelection(categories);
  }, []);
  return (
    <FormSelectAddNew
      options={categorySelection!}
      placeholder={'Select a category'}
      onChange={categoryChangeHandler}
      selected={selectedCategory}
      disabled={false}
      onAddNew={function (input: string): void {
        throw new Error('Function not implemented.');
      }}
      type={''}
    />
  );
}
