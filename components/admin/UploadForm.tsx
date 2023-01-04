import React from 'react';
import { ChangeEvent, useState } from 'react';
import { Error, File } from '../../helpers/organizers/types';

function UploadForm() {
  const [file, setFile] = useState<File>(null);
  const [error, setError] = useState<Error>(null);

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

  console.log(file);

  return (
    <form>
      <input type="file" id="myFile" name="filename" onChange={changeHandler} />
      <input type="submit" />
      {error && <div>{error}</div>}
      {file && <div>{file.name}</div>}
    </form>
  );
}

export default React.memo(UploadForm);
