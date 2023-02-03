import React from 'react';
import { Images } from '../../../helpers/organizers/types';
import {
  SlideshowScrollContainer,
  SlideshowThumbnail,
  SlideshowThumbnailContainer,
} from '../../../styles/components/Desktop/Work/Work';

export default React.memo(function SlideshowScroll({
  images,
  selectedIndex,
  setSelectedIndex,
}: {
  images: Images;
  selectedIndex: number;
  setSelectedIndex: (key: number) => void;
}) {
  function clickHandler(key: number) {
    setSelectedIndex(key);
  }
  return (
    <SlideshowScrollContainer>
      {images.map((image, key) => {
        return (
          <SlideshowThumbnailContainer
            key={key}
            selected={selectedIndex == key}
            onClick={() => clickHandler(key)}
          >
            <SlideshowThumbnail key={key} img={image.url} />
          </SlideshowThumbnailContainer>
        );
      })}
    </SlideshowScrollContainer>
  );
});
