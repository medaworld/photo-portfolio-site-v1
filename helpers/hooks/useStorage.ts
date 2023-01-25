import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import { useState } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';

import { Error } from '../../helpers/organizers/types';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error>(null);

  const uploadFile = (file: {
    file: File;
    id: string;
    description: string;
    category: string | null;
    subcategory: string | null;
    dateTaken: Date;
  }) => {
    const storageRef = ref(projectStorage, `images/${file.id}`);
    uploadBytes(storageRef, file.file)
      .then(async (snapshot) => {
        const url = await getDownloadURL(storageRef);
        try {
          // Store in database
          setDoc(doc(projectFirestore, 'images', file.id), {
            id: file.id,
            url: url,
            dateTaken: file.dateTaken,
            description: file.description,
            category: file.category,
            subcategory: file.subcategory,
            timeCreated: snapshot.metadata.timeCreated,
          });
        } catch (err) {
          setError('Error adding document');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
    const uploadTask = uploadBytesResumable(storageRef, file.file);
    uploadTask.on('state_changed', (snapshot) => {
      const progressPercentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progressPercentage);
    });
  };

  const deleteFile = async (url: string, id: string) => {
    const fileRef = ref(projectStorage, url);
    deleteObject(fileRef)
      .then(() => {
        console.log('Deleted');
      })
      .catch((err) => {
        setError(err.message);
      });

    const docRef = doc(projectFirestore, 'images', id);
    deleteDoc(docRef)
      .then(() => {
        console.log(id);
        console.log('Doc deleted');
      })
      .catch((err) => console.log(err));
  };

  return { progress, error, setError, uploadFile, deleteFile };
};

export default useStorage;
