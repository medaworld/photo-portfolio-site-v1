import { collection, orderBy, query, where } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { projectFirestore } from '../../../../helpers/firebase/config';
import { addSubCategory } from '../../../../helpers/functions/firestore';
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
  const [docs, setDocs] = useState<any[]>([]);

  let ref = query(
    collection(projectFirestore, 'subcategories'),
    where('category', '==', selectedCategory)
  );

  const [subcategories, loading, error] = useCollection(ref, {});

  useEffect(() => {
    if (subcategories) {
      setDocs(
        subcategories.docs.map((doc) => {
          return doc.data();
        })
      );
    }
  }, [subcategories]);

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
