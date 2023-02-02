import { Dispatch, SetStateAction } from 'react';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import {
  FilterSelectorContainer,
  SelectorItem,
} from '../../../../styles/components/Desktop/Admin/Admin';

export default function FilterSelector({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}) {
  const { docs } = useFirestore('categories', null, null, 'category', 'asc');

  const categories = docs?.map((doc, key) => {
    return (
      <SelectorItem
        key={key}
        onClick={() => setSelectedCategory(doc.category)}
        selected={selectedCategory == doc || selectedCategory == doc.category}
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
