import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import { useEffect, useState } from 'react';
import { projectFirestore, projectStorage } from '../../firebase/config';
import { v4 } from 'uuid';

import { Error } from '../../helpers/organizers/types';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error>(null);

  const uploadFile = (file: any, category?: string) => {
    const id = v4();
    const fileName = id + file.name;
    const storageRef = ref(projectStorage, `images/${fileName}`);

    uploadBytes(storageRef, file)
      .then(async (snapshot) => {
        const url = await getDownloadURL(storageRef);
        try {
          // if (category) {
          //   addDoc(collection(projectFirestore, `category/${category}`), {
          //     fileName: fileName,
          //     url: url,
          //     photoTaken: ,
          //     category: ,
          //     addedToDatabase: snapshot.metadata.timeCreated,
          //   });
          // }
          setDoc(doc(projectFirestore, 'images', id), {
            fileName: fileName,
            url: url,
            timeCreated: snapshot.metadata.timeCreated,
            id: id,
          });
        } catch (err) {
          setError('Error adding document');
        }
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
