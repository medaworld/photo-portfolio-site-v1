import React, { Key } from 'react';
import { ChangeEvent, useState } from 'react';
import useStorage from '../../../helpers/hooks/useStorage';
import { UploadOverlayContainer } from '../../../styles/components/Desktop/Admin/Upload';

import Modal from '../UI/Modal';
import FormDetailInput from './FormDetailInput';
import FormFileInput from './FormFileInput';

function UploadOverlay(props: { onClose: () => void }) {
  const { uploadFile, setError, error, progress } = useStorage();
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[] | []>([]);
  const [slideshowImages, setSlideShowImages] = useState<string[]>();
  let selectedFiles: any[] = [];

  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  let images: string[] = [];
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let selected;
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        selectedFiles.push({
          file: e.target.files[i],
          description: '',
          category: { title: '', order: null },
          subcategory: { title: '', order: null },
          dateTaken: new Date(),
        });
        images.push(URL.createObjectURL(e.target.files[i]));
      }
      setFiles(selectedFiles);
      setSlideShowImages(images);
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
  console.log(files);

  function uploadImageAsPromise(imageFile: File) {}

  let selectedUrl;
  if (file) {
    selectedUrl = URL.createObjectURL(file);
  }
  const submitHandler = () => {
    if (file) {
      uploadFile(file, category, dateTaken, description);
    } else {
      setError('No file selected');
    }
  };

  function fileRemoveHandler(index: number) {
    files.splice(index, 1);
    slideshowImages?.splice(index, 1);
  }
  console.log(slideshowImages);
  return (
    <Modal onClose={props.onClose}>
      <UploadOverlayContainer>
        <FormFileInput
          changeHandler={changeHandler}
          fileRemoveHandler={fileRemoveHandler}
          files={files}
          progress={progress}
          slideshowImages={slideshowImages}
        />
        <FormDetailInput submitHandler={submitHandler} error={error} />
      </UploadOverlayContainer>
    </Modal>
  );
}

export default React.memo(UploadOverlay);

//          {file && <div>{file.name}</div>}
