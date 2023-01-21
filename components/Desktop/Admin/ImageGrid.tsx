import React from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import useStorage from '../../../helpers/hooks/useStorage';
import {
  Gallery,
  GalleryItem,
  GalleryMessage,
} from '../../../styles/components/Desktop/Admin/Upload';

import LoadingSpinner from '../UI/LoadingSpinner';

function ImageGrid() {
  const { deleteFile } = useStorage();
  const { docs } = useFirestore('images');

  let images;
  if (docs) {
    images = docs.map((doc, key) => {
      const clickHandler = () => {
        deleteFile(doc.url, doc.id);
      };
      return (
        <GalleryItem
          key={key}
          img={doc.url}
          onClick={clickHandler}
        ></GalleryItem>
      );
    });
  }

  if (docs && docs.length < 1) {
    images = <GalleryMessage>No Images</GalleryMessage>;
  }

  return (
    <Gallery>
      {!docs && <LoadingSpinner />}
      {images}
    </Gallery>
  );
}

export default ImageGrid;
