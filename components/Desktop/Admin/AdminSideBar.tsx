import { Dispatch, SetStateAction, useState } from 'react';
import {
  SideBar,
  SidebarItem,
} from '../../../styles/components/Desktop/Admin/AdminMain';

export default function AdminSideBar({
  selectedSidebarItem,
  setSelectedSidebarItem,
}: {
  selectedSidebarItem: string;
  setSelectedSidebarItem: Dispatch<SetStateAction<string>>;
}) {
  const clickHandler = (selected: string) => {
    setSelectedSidebarItem(selected);
  };

  return (
    <SideBar>
      <ul>
        <SidebarItem
          onClick={() => clickHandler('images')}
          selected={selectedSidebarItem == 'images'}
        >
          Photos
        </SidebarItem>
        <SidebarItem
          onClick={() => clickHandler('categories')}
          selected={selectedSidebarItem == 'categories'}
        >
          Categories
        </SidebarItem>
        <SidebarItem
          onClick={() => clickHandler('subcategories')}
          selected={selectedSidebarItem == 'subcategories'}
        >
          Subcategories
        </SidebarItem>
      </ul>
    </SideBar>
  );
}
