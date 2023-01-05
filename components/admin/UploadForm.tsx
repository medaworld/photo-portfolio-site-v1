import React from 'react';
import { ChangeEvent, useState } from 'react';
import useStorage from '../../helpers/hooks/useStorage';
import {
  FormWrapper,
  ImageDetail,
  ImageUpload,
  UploadArea,
} from '../../styles/components/ui/Form';
import Modal from '../ui/Modal';
import ProgressBar from '../ui/ProgressBar';

function UploadForm(props: { onClose: () => void }) {
  const { uploadFile, setError, error, progress } = useStorage();
  const [file, setFile] = useState<any>(null);

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let selected;
    if (e.target.files) {
      selected = e.target.files[0];
    }
    if (selected && types.includes(selected.type)) {
      console.log(e);
      setFile(selected!);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png, jpeg, or jpg)');
    }
  };

  let selectedUrl;
  if (file) {
    selectedUrl = URL.createObjectURL(file);
  }
  const submitHandler = () => {
    uploadFile(file);
  };

  return (
    <Modal onClose={props.onClose}>
      <FormWrapper>
        <ImageUpload>
          <UploadArea htmlFor="upload-photo">
            {!file && <p>Upload Photo(s)</p>}
            {file && <img id="prev" src={selectedUrl} alt="prevImage" />}
          </UploadArea>
          <input type="file" id="upload-photo" onChange={changeHandler} />
          {file && <div>{file.name}</div>}
        </ImageUpload>
        <ImageDetail>
          <label>Date Taken</label>
          <input type="date"></input>
          <label>Description</label>
          <textarea />
          <label>Collection</label>
          <select />
          <input type="text"></input>
          <button onClick={submitHandler}>Upload Image</button>
        </ImageDetail>
        {error && <div>{error}</div>}
        {progress < 100 && <ProgressBar progress={progress} />}
        {progress == 100 && <p>Done</p>}
      </FormWrapper>
    </Modal>
  );
}

export default React.memo(UploadForm);
