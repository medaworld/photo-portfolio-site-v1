import { useContext } from 'react';
import { useTheme } from 'styled-components';
import NotificationContext from '../../../context/notificationContext';
import {
  Message,
  Notifier,
} from '../../../styles/components/Desktop/UI/Notification';

interface NotificationProps {
  title: string;
  message: string;
  status: string;
}

export default function Notification({ activeNotification }: any) {
  const notificationCtx = useContext(NotificationContext);
  const { colors } = useTheme();

  let color = colors.primary;
  if (activeNotification?.status === 'success') {
    color = colors.success;
  } else if (activeNotification?.status === 'error') {
    color = colors.error;
  }

  return (
    <Notifier
      statusColor={color}
      onClick={notificationCtx.hideNotification}
      show={activeNotification}
    >
      <Message>{activeNotification?.message}</Message>
    </Notifier>
  );
}
