import Link from 'next/link';
import { Image } from '../../../styles/components/Desktop/UI';
import {
  CoverContainer,
  CoverTitle,
} from '../../../styles/components/Desktop/Work/Work';

function CategoryCover({
  src,
  alt,
  category,
  url,
}: {
  src: string;
  alt: string;
  category: string;
  url: string;
}) {
  return (
    <CoverContainer>
      <Link href={url} scroll={false}>
        <CoverTitle>{category}</CoverTitle>
        <Image src={src} alt={alt} />
      </Link>
    </CoverContainer>
  );
}

export default CategoryCover;
