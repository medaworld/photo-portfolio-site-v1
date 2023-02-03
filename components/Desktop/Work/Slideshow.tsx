import { useEffect, useState } from 'react';
import { Image, Images } from '../../../helpers/organizers/types';
import { SlideshowContainer } from '../../../styles/components/Desktop/Work/Work';

import SlideshowMainImage from './SlideshowMainImage';
import SlideshowScroll from './SlideshowScroll';

export default function Slideshow({ images }: { images: Images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<Image>();

  useEffect(() => {
    if (images) {
      setSelectedImage(images[selectedIndex]);
    }
  }, [selectedIndex]);

  return (
    <SlideshowContainer>
      <SlideshowMainImage
        images={images}
        selectedImage={selectedImage}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <SlideshowScroll
        images={images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </SlideshowContainer>
  );
}
