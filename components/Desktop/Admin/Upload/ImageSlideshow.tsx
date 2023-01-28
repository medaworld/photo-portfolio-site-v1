import {
  ImageSlideshowContainer,
  SlideshowMain,
  SlideshowScroll,
} from '../../../../styles/components/Desktop/Admin/Upload';
import SlideshowThumbnail from './SlideshowThumbnail';

function ImageSlideshow({
  fileRemoveHandler,
  slideshowImages,
  selectedImage,
  setFocusHandler,
}: {
  fileRemoveHandler: (index: number) => void;
  slideshowImages: string[];
  selectedImage: string;
  setFocusHandler: (index: number) => void;
}) {
  return (
    <ImageSlideshowContainer>
      <SlideshowMain img={selectedImage} />
      {slideshowImages.length > 1 && (
        <SlideshowScroll>
          {slideshowImages.map((image: string | undefined, index: number) => {
            const selectHandler = () => {
              if (image) {
                setFocusHandler(index);
              }
            };
            const deleteHandler = () => {
              fileRemoveHandler(index);
            };
            return (
              <SlideshowThumbnail
                key={index}
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
