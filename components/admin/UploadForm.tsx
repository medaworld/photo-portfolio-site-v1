import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import React, { useEffect } from 'react';
import { ChangeEvent, useState } from 'react';
import { projectStorage } from '../../firebase/config';
import useStorage from '../../helpers/hooks/useStorage';
import { Error, File } from '../../helpers/organizers/types';
import { FormWrapper } from '../../styles/components/ui/form';
import { v4 } from 'uuid';
import ProgressBar from '../ui/ProgressBar';

function UploadForm() {
  const [file, setFile] = useState<any>(null);
  const [error, setError] = useState<Error>(null);
  const [imageList, setImageList] = useState<any[]>();
  const [progress, setProgress] = useState(0);

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let selected;
    if (e.target.files) {
      selected = e.target.files[0];
    }
    if (selected && types.includes(selected.type)) {
      setFile(selected!);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png, jpeg, or jpg)');
    }
  };

  const submitHandler = () => {
    const storageRef = ref(projectStorage, `images/${v4() + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Uploaded');
      })
      .catch((err) => {
        console.log(err.message);
      });
    uploadTask.on('state_changed', (snapshot) => {
      const progressPercentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progressPercentage);
    });
  };

  useEffect(() => {
    const imageListRef = ref(projectStorage, 'images/');
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => (prev ? [...prev, url] : [url]));
        });
      });
    });
  }, []);
  console.log(imageList);

  return (
    <>
      <FormWrapper>
        <input type="file" onChange={changeHandler} />
        <button onClick={submitHandler}>Upload Image</button>
        <ProgressBar progress={progress} />
        {progress}
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
        {imageList?.map((url) => {
          return <img key={Math.random()} src={url} />;
        })}
      </FormWrapper>
    </>
  );
}

export default React.memo(UploadForm);
