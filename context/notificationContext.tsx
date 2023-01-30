import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: function (notificationData: any) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props: any) {
  const [activeNotification, setActiveNotification]: any = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: any) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null as any);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context as any}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
