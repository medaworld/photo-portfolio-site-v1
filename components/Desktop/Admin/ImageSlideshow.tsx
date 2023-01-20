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
  setSelectedImage,
}: {
  fileRemoveHandler: (index: number) => void;
  slideshowImages: string[];
  setSelectedImage: any;
}) {
  const [mainImage, setMainImage] = useState(slideshowImages[0]);
  const [selectedKey, setSelectedKey] = useState(0);

  useEffect(() => {
    if (!slideshowImages.includes(mainImage)) {
      setMainImage(slideshowImages[selectedKey]);
    }
  }, [slideshowImages]);

  return (
    <ImageSlideshowContainer>
      <SlideshowMain img={mainImage} />
      {slideshowImages.length > 1 && (
        <SlideshowScroll>
          {slideshowImages.map((image: string | undefined, key: number) => {
            function selectHandler() {
              if (image) {
                setMainImage(image);
                setSelectedImage(key);
                setSelectedKey(key);
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
