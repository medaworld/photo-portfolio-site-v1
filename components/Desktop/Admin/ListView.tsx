import {
  ListContainer,
  ListViewMain,
  ListViewItem,
} from '../../../styles/components/Desktop/Admin/AdminMain';
import AddNewInput from './AddNewInput';
import FilterSelector from './Categories/FilterSelector';

export default function ListView({
  docs,
  type,
  categorySelection,
  setCategorySelection,
  listSelection,
  setListSelection,
}: {
  docs: any;
  type: string;
  listSelection: any;
  setListSelection: any;
  categorySelection?: any;
  setCategorySelection?: any;
}) {
  const itemSelectHandler = (doc: any) => {
    setListSelection(doc);
  };

  const listItems = docs?.map((doc: any, key: number) => {
    if (type == 'category') {
      return (
        <ListViewItem
          key={key}
          onClick={() => itemSelectHandler(doc)}
          selected={listSelection == doc}
        >
          {doc.category}
        </ListViewItem>
      );
    } else {
      return (
        <ListViewItem
          key={key}
          onClick={() => itemSelectHandler(doc)}
          selected={listSelection == doc}
        >
          {doc.subcategory}
        </ListViewItem>
      );
    }
  });

  const filterSelector = (
    <FilterSelector
      selectedCategory={categorySelection}
      setSelectedCategory={setCategorySelection}
    />
  );

  return (
    <ListContainer>
      {type === 'subcategory' && filterSelector}
      <ListViewMain>{listItems}</ListViewMain>
      <AddNewInput
        type={type}
        handler={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </ListContainer>
  );
}
