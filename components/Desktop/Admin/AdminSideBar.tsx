import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  SideBar,
  SidebarItem,
} from '../../../styles/components/Desktop/Admin/Admin';
import Icon from '../UI/Icon';
import UploadOverlay from './Upload/UploadOverlay';

import AddIcon from '/public/icons/add.png';

export default function AdminSideBar({}: {}) {
  const [showUploadOverlay, setShowUploadOverlay] = useState(false);
  const router = useRouter();

  function showFormHandler() {
    setShowUploadOverlay(true);
  }

  function hideFormHandler() {
    setShowUploadOverlay(false);
  }

  return (
    <SideBar>
      {showUploadOverlay && <UploadOverlay onClose={hideFormHandler} />}
      <ul>
        <Link href={'/admin'}>
          <SidebarItem selected={router.pathname === '/admin'}>
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
    </SideBar>
  );
}
