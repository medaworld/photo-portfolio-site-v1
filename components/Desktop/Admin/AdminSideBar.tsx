import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  SideBar,
  SidebarItem,
} from '../../../styles/components/Desktop/Admin/AdminMain';
import Icon from '../UI/Icon';

import AddIcon from '/public/icons/add.png';

export default function AdminSideBar({}: {}) {
  const router = useRouter();

  return (
    <SideBar>
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
        <SidebarItem onClick={() => {}} selected={false}>
          <Icon img={AddIcon.src} size={25} />
          <p>Upload</p>
        </SidebarItem>
      </ul>
    </SideBar>
  );
}
