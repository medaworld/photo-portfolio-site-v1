import Link from 'next/link';
import {
  Header,
  HeaderFill,
  Nav,
} from '../../styles/components/layout/main-header';
import Icon from '../ui/Icon';
import Logo from './Logo';

import IGIcon from '/public/icons/instagram.png';

function MainHeader() {
  return (
    <>
      <Header>
        <Link href="/">
          <Logo />
        </Link>
        <Nav>
          <ul>
            <li>
              <Link href="/work">WORK</Link>
            </li>
            <li>
              <Link href="/journal">JOURNAL</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
            <li>
              <a href={'https://www.instagram.com'} target="_blank">
                <Icon img={IGIcon.src} size={20} />
              </a>
            </li>
          </ul>
        </Nav>
      </Header>
      <HeaderFill />
    </>
  );
}

export default MainHeader;
