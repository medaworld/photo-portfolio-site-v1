import React from 'react';
import { ChangeEvent } from 'react';
import {
  FormUploadContainer,
  UploadArea,
} from '../../../styles/components/Desktop/Admin/Upload';
import ProgressBar from '../UI/ProgressBar';
import ImageSlideshow from './ImageSlideshow';

function FormFileInput({
  fileUploadHandler,
  fileRemoveHandler,
  files,
  progress,
  slideshowImages,
  selectedImage,
  setFocusHandler,
}: {
  fileUploadHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  fileRemoveHandler: (index: number) => void;
  files: any[];
  progress: number;
  slideshowImages: string[];
  selectedImage: string;
  setFocusHandler: (index: number) => void;
}) {
  return (
    <FormUploadContainer>
      {!files.length && (
        <UploadArea htmlFor="upload-photo">
          <input
            type="file"
            id="upload-photo"
            onChange={fileUploadHandler}
            multiple
          />
          <p>Upload Photo(s)</p>
        </UploadArea>
      )}
      {files.length > 0 && (
        <ImageSlideshow
          slideshowImages={slideshowImages}
          fileRemoveHandler={fileRemoveHandler}
          selectedImage={selectedImage}
          setFocusHandler={setFocusHandler}
        />
      )}
      <ProgressBar progress={progress} />
    </FormUploadContainer>
  );
}

export default React.memo(FormFileInput);
