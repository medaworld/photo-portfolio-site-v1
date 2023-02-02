import { SetStateAction, Dispatch } from 'react';
import { Category, Subcategory } from '../../../../helpers/organizers/types';
import {
  ListContainer,
  ListViewMain,
  ListViewItem,
} from '../../../../styles/components/Desktop/Admin/ListView';
import FilterSelector from './FilterSelector';

export default function ListView({
  docs,
  type,
  selectedItem,
  setSelectedItem,
  selectedCategory,
  setSelectedCategory,
}: {
  docs: Category[] | Subcategory[];
  type: string;
  selectedItem: Category | Subcategory;
  setSelectedItem: Dispatch<SetStateAction<Category | Subcategory>>;
  selectedCategory?: string;
  setSelectedCategory?: Dispatch<SetStateAction<string>>;
}) {
  const itemSelectHandler = (doc: any) => {
    setSelectedItem(doc);
  };

  const filterSelector = (
    <FilterSelector
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );

  const listItems = docs?.map((doc: any, key: number) => {
    return (
      <ListViewItem
        key={key}
        onClick={() => itemSelectHandler(doc)}
        selected={selectedItem == doc}
      >
        {type === 'category' ? doc.category : doc.subcategory}
      </ListViewItem>
    );
  });

  return (
    <ListContainer>
      {type === 'subcategory' && filterSelector}
      <ListViewMain>{listItems}</ListViewMain>
    </ListContainer>
  );
}
