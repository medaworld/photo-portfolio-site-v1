import React from 'react';
import useFirestore from '../../../helpers/hooks/useFirestore';
import useStorage from '../../../helpers/hooks/useStorage';
import {
  Gallery,
  GalleryItem,
} from '../../../styles/components/Desktop/Admin/Upload';

import LoadingSpinner from '../UI/LoadingSpinner';

function ImageGrid() {
  const { deleteFile } = useStorage();
  const { docs } = useFirestore('images');
  console.log(docs);

  let images;
  if (docs) {
    images = docs.map((doc) => {
      const clickHandler = () => {
        deleteFile(doc.url, doc.id);
      };
      return (
        <GalleryItem
          key={doc.fileName}
          img={doc.url}
          onClick={clickHandler}
        ></GalleryItem>
      );
    });
  }

  if (docs && docs.length < 1) {
    images = <p>No Images</p>;
  }

  return (
    <Gallery>
      {!docs && <LoadingSpinner />}
      {images}
    </Gallery>
  );
}

export default ImageGrid;
