import React from 'react';
import { ChangeEvent } from 'react';
import {
  FormUploadContainer,
  PreviewImage,
  UploadArea,
} from '../../../styles/components/Desktop/Admin/Upload';
import ProgressBar from '../UI/ProgressBar';

function FormUpload({
  changeHandler,
  file,
  selectedUrl,
  progress,
}: {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  file: any;
  selectedUrl: string | undefined;
  progress: number;
}) {
  return (
    <FormUploadContainer>
      <input type="file" id="upload-photo" onChange={changeHandler} />
      <UploadArea htmlFor="upload-photo">
        {file && <PreviewImage img={selectedUrl} />}
        {!file && <p>Upload Photo(s)</p>}
      </UploadArea>
      <ProgressBar progress={progress} />
    </FormUploadContainer>
  );
}

export default React.memo(FormUpload);
