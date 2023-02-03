import {
  Buttons,
  LeftArrowButton,
  MainImage,
  MainWrapper,
  RightArrowButton,
} from '../../../styles/components/Desktop/Work/Work';
import Icon from '../UI/Icon';

import leftArrow from '/public/icons/leftArrow.png';
import rightArrow from '/public/icons/rightArrow.png';

export default function SlideshowMainImage({
  images,
  selectedIndex,
  setSelectedIndex,
  selectedImage,
}) {
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
    <MainWrapper>
      <MainImage img={selectedImage?.url} />
      <Buttons>
        {selectedIndex > 0 && (
          <LeftArrowButton onClick={leftClickHandler}>
            <Icon img={leftArrow.src} size={50} color={'light'} />
          </LeftArrowButton>
        )}
        {selectedIndex < images.length - 1 && (
          <RightArrowButton onClick={rightClickHandler}>
            <Icon img={rightArrow.src} size={50} color={'light'} />
          </RightArrowButton>
        )}
      </Buttons>
    </MainWrapper>
  );
}
