import {
  Remove,
  SlideshowThumbnailContainer,
  SlideshowThumbnailFill,
} from '../../../styles/components/Desktop/Admin/Upload';
import RemoveIcon from '/public/icons/remove.png';

function SlideshowThumbnail({
  img,
  selectHandler,
  deleteHandler,
}: {
  img: string | undefined;
  selectHandler: () => void;
  deleteHandler: () => void;
}) {
  return (
    <SlideshowThumbnailContainer>
      <Remove>
        <img id="preview" src={RemoveIcon.src} alt="" onClick={deleteHandler} />
      </Remove>
      <SlideshowThumbnailFill img={img} onClick={selectHandler} />
    </SlideshowThumbnailContainer>
  );
}

export default SlideshowThumbnail;
