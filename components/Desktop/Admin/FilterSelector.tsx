import { useEffect, useState } from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  FilterSelectorContainer,
  SelectorItem,
} from '../../../styles/components/Desktop/Admin/Admin';

export default function FilterSelector({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: any;
  setSelectedCategory: any;
}) {
  const [fetchedDocs, setFetchedDocs] = useState<any[]>();
  const { fetchFirestore } = useFirestore();
  useEffect(() => {
    fetchFirestore('categories', null, null, 'category', 'asc').then((docs) =>
      setFetchedDocs(docs)
    );
  }, []);

  const categories = fetchedDocs?.map((doc, key) => {
    return (
      <SelectorItem
        key={key}
        onClick={() => setSelectedCategory(doc)}
        selected={selectedCategory == doc}
      >
        {doc.category}
      </SelectorItem>
    );
  });

  return (
    <FilterSelectorContainer>
      <SelectorItem
        onClick={() => setSelectedCategory(null)}
        selected={selectedCategory == null}
      >
        All
      </SelectorItem>
      {categories}
    </FilterSelectorContainer>
  );
}
