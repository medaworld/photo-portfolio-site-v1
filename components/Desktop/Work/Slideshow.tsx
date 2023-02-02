import { useEffect, useState } from 'react';
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
import Icon from '../UI/Icon';

import leftArrow from '/public/icons/leftArrow.png';
import rightArrow from '/public/icons/rightArrow.png';

export default function Slideshow({ images }: { images: Images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0].url);

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

  useEffect(() => {
    setMainImage(images[selectedIndex].url);
  }, [selectedIndex]);

  return (
    <SlideshowContainer>
      <MainWrapper>
        <Buttons>
          <ArrowButton onClick={leftClickHandler} appear={selectedIndex === 0}>
            <Icon img={leftArrow.src} size={50} color={'light'} />
          </ArrowButton>
          <ArrowButton
            onClick={rightClickHandler}
            appear={selectedIndex === images.length - 1}
          >
            <Icon img={rightArrow.src} size={50} color={'light'} />
          </ArrowButton>
        </Buttons>
        <MainImage img={mainImage} />
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
