import Image from 'next/legacy/image';
import {
  ImageContainer,
  ImageWrapper,
} from '../../../styles/components/Desktop/UI';

function AutoImage({ src, alt }: { src: string; alt: string }) {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} layout="fill" className={'image'} />
    </ImageContainer>
  );
}

export default AutoImage;
