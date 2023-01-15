import React from 'react';
import { ChangeEvent } from 'react';
import {
  FormUploadContainer,
  PreviewImage,
  UploadArea,
} from '../../../styles/components/Desktop/Admin/Upload';
import ProgressBar from '../UI/ProgressBar';
import ImageSlideshow from './ImageSlideshow';

function FormFileInput({
  changeHandler,
  fileRemoveHandler,
  files,
  progress,
  slideshowImages,
  setSelectedImage,
}: {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  fileRemoveHandler: (index: number) => void;
  files: any[];
  progress: number;
  slideshowImages: string[];
  setSelectedImage: any;
}) {
  return (
    <FormUploadContainer>
      {!files.length && (
        <UploadArea htmlFor="upload-photo">
          <input
            type="file"
            id="upload-photo"
            onChange={changeHandler}
            multiple
          />
          <p>Upload Photo(s)</p>
        </UploadArea>
      )}
      {files.length && (
        <ImageSlideshow
          slideshowImages={slideshowImages}
          fileRemoveHandler={fileRemoveHandler}
          setSelectedImage={setSelectedImage}
        />
      )}
      <ProgressBar progress={progress} />
    </FormUploadContainer>
  );
}

export default React.memo(FormFileInput);
