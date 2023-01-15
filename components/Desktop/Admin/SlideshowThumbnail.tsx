import { createTextChangeRange } from 'typescript';
import {
  Remove,
  SlideshowThumbnailContainer,
  SlideshowThumbnailFill,
} from '../../../styles/components/Desktop/Admin/Upload';
import Icon from '../UI/Icon';
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
  //   const canvas = document.createElement('canvas')
  //   canvas.width = newWidth;
  //   canvas.height = newheight;
  //   const ctx = canvas.getContext('2d')
  //   ctx!.drawImage(img, 0, 0, newWidth, newHeight)
  //   canvas.toBlob(function(blob) {}, 'image/jpeg', 0.3)
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
