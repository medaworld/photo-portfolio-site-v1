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
  const { docs } = useFirestore('categories', null, null, 'category', 'asc');

  const categories = docs?.map((doc, key) => {
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
