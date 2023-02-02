import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  SideBar,
  SidebarItem,
} from '../../../../styles/components/Desktop/Admin/Admin';
import Icon from '../../UI/Icon';
import AddNewInput from './AddNewInput';
import UploadOverlay from '../Upload/UploadOverlay';

import AddIcon from '/public/icons/add.png';

export default function AdminSideBar({}: {}) {
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);
  const [listView, setListView] = useState(true);
  const router = useRouter();

  function showFormHandler() {
    setShowUploadOverlay(true);
  }

  function hideFormHandler() {
    setShowUploadOverlay(false);
  }

  function logoutHandler() {
    signOut();
  }

  let type: string;
  if (router.pathname === '/admin/categories') {
    type = 'category';
  } else {
    type = 'subcategory';
  }

  useEffect(() => {
    if (router.pathname === '/admin/photos') {
      setListView(false);
    }
  });

  const addNew = (
    <ul>
      <AddNewInput type={type} />
    </ul>
  );

  return (
    <SideBar>
      {showUploadOverlay && <UploadOverlay onClose={hideFormHandler} />}
      <ul>
        <Link href={'/admin/photos'}>
          <SidebarItem selected={router.pathname === '/admin/photos'}>
            Photos
          </SidebarItem>
        </Link>
        <Link href={'/admin/categories'}>
          <SidebarItem selected={router.pathname === '/admin/categories'}>
            Categories
          </SidebarItem>
        </Link>
        <Link href={'/admin/subcategories'}>
          <SidebarItem selected={router.pathname === '/admin/subcategories'}>
            Subcategories
          </SidebarItem>
        </Link>
      </ul>
      <ul>
        <SidebarItem onClick={showFormHandler} selected={false}>
          <Icon img={AddIcon.src} size={25} />
          <p>Upload</p>
        </SidebarItem>
      </ul>
      {listView && addNew}
      <ul>
        <SidebarItem selected={false} onClick={logoutHandler}>
          Logout
        </SidebarItem>
      </ul>
    </SideBar>
  );
}
