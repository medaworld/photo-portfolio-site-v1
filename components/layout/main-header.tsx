import Link from 'next/link';
import {
  Header,
  HeaderFill,
  Nav,
} from '../../styles/components/layout/main-header';
import Logo from './logo';

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
              <Link href="/concert">Concert</Link>
            </li>
            <li>
              <Link href="/travel">Travel</Link>
            </li>
            <li>
              <Link href="/film">Film</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>
      </Header>
      <HeaderFill />
    </>
  );
}

export default MainHeader;
