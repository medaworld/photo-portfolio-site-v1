import { Image } from '../../../styles/components/Desktop/UI';
import { SlideshowImageContainer } from '../../../styles/components/Desktop/Work/Work';

export default function SlideshowImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <SlideshowImageContainer>
      <Image src={src} alt={alt} />
    </SlideshowImageContainer>
  );
}
