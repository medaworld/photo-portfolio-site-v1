import Link from 'next/link';
import {
  Header,
  HeaderFill,
  Nav,
} from '../../../styles/components/Desktop/Layout/MainHeader';

import Icon from '../UI/Icon';
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
              <Link href="/work" scroll={false}>
                WORK
              </Link>
            </li>
            <li>
              <Link href="/contact" scroll={false}>
                CONTACT
              </Link>
            </li>
            <li>
              <a href={'https://www.instagram.com'} target="_blank">
                <Icon img={IGIcon.src} size={23} />
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
