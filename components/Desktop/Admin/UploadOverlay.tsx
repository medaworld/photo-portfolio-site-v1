import React from 'react';
import { ChangeEvent, useState } from 'react';
import { v4 } from 'uuid';
import useStorage from '../../../helpers/hooks/useStorage';
import { UploadOverlayContainer } from '../../../styles/components/Desktop/Admin/Upload';

import Modal from '../UI/Modal';
import FormDetailInput from './FormDetailInput';
import FormFileInput from './FormFileInput';

function UploadOverlay(props: { onClose: () => void }) {
  const { uploadFile, setError, error, progress } = useStorage();
  const [files, setFiles] = useState<any[] | []>([]);
  const [slideshowImages, setSlideShowImages] = useState<string[]>();
  const [selectedFocus, setSelectedFocus] = useState<any>();

  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  let selectedFiles: any[] = [];
  let previewImages: string[] = [];

  const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        if (types.includes(e.target.files[i].type)) {
          selectedFiles.push({
            file: e.target.files[i],
            id: v4(),
            description: '',
            category: null,
            subcategory: null,
            dateTaken: undefined,
          });
          previewImages.push(URL.createObjectURL(e.target.files[i]));
        } else {
          setError('Images must be png, jpeg, or jpg');
        }
      }
      setFiles(selectedFiles);
      setSlideShowImages(previewImages);
      setSelectedFocus({ data: selectedFiles[0], image: previewImages[0] });
    }
  };

  const fileRemoveHandler = (index: number) => {
    setSlideShowImages(() => {
      return slideshowImages?.filter((img) => img !== slideshowImages[index]);
    });
    setFiles(() => {
      return files.filter((file) => file != files[index]);
    });
    setSelectedFocus(() => {
      if (index !== 0) {
        return {
          data: files[index - 1],
          image: slideshowImages![index - 1],
        };
      } else {
        return {
          data: files[index + 1],
          image: slideshowImages![index + 1],
        };
      }
    });
  };

  const setFocusHandler = (index: number) => {
    setSelectedFocus({ data: files[index], image: slideshowImages![index] });
  };

  const submitHandler = () => {
    if (files) {
      try {
        for (let i = 0; i < files.length; i++) {
          uploadFile(files[i]);
        }
      } catch {
        setError('Error uploading');
      }
    } else {
      setError('No file selected');
    }
  };

  const detailChangeHandler = (newData: any) => {
    setSelectedFocus(() => {
      return { ...selectedFocus, data: newData };
    });
    setFiles(() => {
      return files.map((file) => {
        return file.id === newData.id ? newData : file;
      });
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <UploadOverlayContainer>
        <FormFileInput
          fileUploadHandler={fileUploadHandler}
          fileRemoveHandler={fileRemoveHandler}
          files={files}
          progress={progress}
          slideshowImages={slideshowImages!}
          selectedImage={selectedFocus?.image}
          setFocusHandler={setFocusHandler}
          error={error}
        />
        <FormDetailInput
          submitHandler={submitHandler}
          error={error}
          selectedDetail={selectedFocus?.data}
          detailChangeHandler={detailChangeHandler}
        />
      </UploadOverlayContainer>
    </Modal>
  );
}

export default React.memo(UploadOverlay);
