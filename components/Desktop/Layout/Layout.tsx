import { Fragment, ReactNode, useContext } from 'react';
import NotificationContext from '../../../context/notificationContext';
import Notification from '../UI/Notification';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      <Notification activeNotification={activeNotification} />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;
