import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import { useEffect, useState } from 'react';
import { projectStorage } from '../../firebase/config';
import { v4 } from 'uuid';

const useStorage = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [urls, setUrls] = useState<any[]>();

  useEffect(() => {
    const storageRef = ref(projectStorage, `images/${v4() + file.name}`);
    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Uploaded');
      })
      .catch((err) => {
        setError(err.message);
      });

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', (snapshot) => {
      const progressPercentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progressPercentage);
    });

    const imageListRef = ref(projectStorage, 'images/');
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item)
          .then((url) => {
            setUrls((prev) => (prev ? [...prev, url] : [url]));
          })
          .catch((err) => {
            setError(err.message);
          });
      });
    });
  }, []);

  return { progress, urls, error };
};

export default useStorage;
