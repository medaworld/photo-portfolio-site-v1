import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { Category, Subcategory } from '../../../helpers/organizers/types';
import {
  ListContainer,
  ListViewMain,
  ListViewItem,
} from '../../../styles/components/Desktop/Admin/ListView';
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
  setSelectedItem: Dispatch<any>;
  selectedCategory?: Category;
  setSelectedCategory?: Dispatch<SetStateAction<Category>>;
}) {
  const itemSelectHandler = (doc: any) => {
    setSelectedItem(doc);
  };

  const listItems = docs?.map((doc: any, key: number) => {
    if (type == 'category') {
      return (
        <ListViewItem
          key={key}
          onClick={() => itemSelectHandler(doc)}
          selected={selectedItem == doc}
        >
          {doc.category}
        </ListViewItem>
      );
    } else {
      return (
        <ListViewItem
          key={key}
          onClick={() => itemSelectHandler(doc)}
          selected={selectedItem == doc}
        >
          {doc.subcategory}
        </ListViewItem>
      );
    }
  });

  const filterSelector = (
    <FilterSelector
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );

  return (
    <ListContainer>
      {type === 'subcategory' && filterSelector}
      <ListViewMain>{listItems}</ListViewMain>
    </ListContainer>
  );
}
