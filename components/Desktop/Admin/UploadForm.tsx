import React from 'react';
import { ChangeEvent, useState } from 'react';
import useStorage from '../../../helpers/hooks/useStorage';
import { Container } from '../../../styles/components/Desktop/Admin/Upload';

import Modal from '../UI/Modal';
import FormDetails from './FormDetails';
import FormUpload from './FormUpload';

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
      <Container>
        <FormUpload
          changeHandler={changeHandler}
          file={file}
          selectedUrl={selectedUrl}
          progress={progress}
        />
        <FormDetails submitHandler={submitHandler} error={error} />
      </Container>
    </Modal>
  );
}

export default React.memo(UploadForm);

//          {file && <div>{file.name}</div>}
