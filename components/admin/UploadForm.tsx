import React from 'react';
import { ChangeEvent, useState } from 'react';
import useStorage from '../../helpers/hooks/useStorage';
import { FormWrapper } from '../../styles/components/ui/Form';
import ProgressBar from '../ui/ProgressBar';

function UploadForm() {
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

  const submitHandler = () => {
    uploadFile(file);
  };

  return (
    <FormWrapper>
      <input type="file" onChange={changeHandler} />
      <button onClick={submitHandler}>Upload Image</button>
      {error && <div>{error}</div>}
      {file && <div>{file.name}</div>}
      {progress < 100 && <ProgressBar progress={progress} />}
    </FormWrapper>
  );
}

export default React.memo(UploadForm);
