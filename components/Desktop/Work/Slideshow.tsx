import { useState } from 'react';
import { Images } from '../../../helpers/organizers/types';
import {
  ArrowButton,
  Buttons,
  MainImage,
  MainWrapper,
  SlideshowContainer,
  SlideshowScroll,
  SlideshowThumbnail,
  SlideshowThumbnailContainer,
} from '../../../styles/components/Desktop/Work/Work';

export default function Slideshow({ images }: { images: Images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focusedImage, setFocusedImage] = useState(images[0].url);

  function leftClickHandler() {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }

  function rightClickHandler() {
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }

  return (
    <SlideshowContainer>
      <MainWrapper>
        <Buttons>
          <ArrowButton onClick={leftClickHandler} appear={selectedIndex === 0}>
            {'<'}
          </ArrowButton>
          <ArrowButton
            onClick={rightClickHandler}
            appear={selectedIndex === images.length - 1}
          >
            {'>'}
          </ArrowButton>
        </Buttons>
        <MainImage img={images[selectedIndex].url} />
      </MainWrapper>
      <SlideshowScroll>
        {images.map((image, key) => {
          function clickHandler() {
            setSelectedIndex(key);
          }
          return (
            <SlideshowThumbnailContainer
              selected={selectedIndex == key}
              onClick={clickHandler}
            >
              <SlideshowThumbnail key={key} img={image.url} />
            </SlideshowThumbnailContainer>
          );
        })}
      </SlideshowScroll>
    </SlideshowContainer>
  );
}
