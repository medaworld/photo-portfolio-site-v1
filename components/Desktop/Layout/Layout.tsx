import { Fragment, ReactNode } from 'react';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;
