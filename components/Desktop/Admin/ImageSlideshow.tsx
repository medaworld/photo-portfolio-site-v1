import { Key, useEffect, useState } from 'react';
import {
  ImageSlideshowContainer,
  SlideshowMain,
  SlideshowScroll,
} from '../../../styles/components/Desktop/Admin/Upload';
import SlideshowThumbnail from './SlideshowThumbnail';

function ImageSlideshow({
  fileRemoveHandler,
  slideshowImages,
}: {
  fileRemoveHandler: (index: number) => void;
  slideshowImages: string[];
}) {
  const [mainImage, setMainImage] = useState(slideshowImages[0]);
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {}, [slideshowImages]);

  return (
    <ImageSlideshowContainer>
      <SlideshowMain img={mainImage} />
      {slideshowImages.length > 1 && (
        <SlideshowScroll>
          {slideshowImages.map((image: string | undefined, key: number) => {
            function selectHandler() {
              if (image) {
                setMainImage(image);
              }
            }
            function deleteHandler() {
              fileRemoveHandler(key);
            }
            return (
              <SlideshowThumbnail
                key={key}
                img={image}
                selectHandler={selectHandler}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </SlideshowScroll>
      )}
    </ImageSlideshowContainer>
  );
}

export default ImageSlideshow;
