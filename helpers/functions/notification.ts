import { useContext } from 'react';
import NotificationContext from '../../context/notificationContext';

export default function notificationOperations() {
  const notificationCtx = useContext(NotificationContext);

  function successAdd() {
    notificationCtx.showNotification({
      title: 'Success',
      message: 'Successfully added',
      status: 'success',
    });
  }

  function errorAdd() {
    () => {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error adding',
        status: 'error',
      });
    };
  }

  function successUpdate() {
    notificationCtx.showNotification({
      title: 'Success',
      message: 'Update Successful',
      status: 'success',
    });
  }

  function errorUpdate() {
    () => {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Update Error',
        status: 'error',
      });
    };
  }

  function successDelete() {
    notificationCtx.showNotification({
      title: 'Success',
      message: 'Successfully deleted',
      status: 'success',
    });
  }

  function errorDelete() {
    () => {
      notificationCtx.showNotification({
        title: 'Error',
        message: 'Error deleting',
        status: 'error',
      });
    };
  }

  function successStorageUpload() {
    notificationCtx.showNotification({
      title: 'Success',
      message: 'Successfully uploaded in storage',
      status: 'success',
    });
  }

  function successStorageDelete() {
    notificationCtx.showNotification({
      title: 'Success',
      message: 'Successfully deleted from storage',
      status: 'success',
    });
  }

  function errorFetching() {
    notificationCtx.showNotification({
      title: 'Error',
      message: 'Error fetching data',
      status: 'error',
    });
  }

  function errorInvalid(msg: string) {
    notificationCtx.showNotification({
      title: 'Error',
      message: msg,
      status: 'error',
    });
  }

  return {
    successAdd,
    successUpdate,
    successDelete,
    errorAdd,
    errorUpdate,
    errorDelete,
    successStorageUpload,
    successStorageDelete,
    errorFetching,
    errorInvalid,
  };
}
