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
      <img src={src} alt={alt} />
    </SlideshowImageContainer>
  );
}
