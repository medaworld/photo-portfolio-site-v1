import useFirestore from '../../../helpers/hooks/useFirestore';
import {
  CoverSelectContainer,
  Gallery,
  GalleryItem,
  Subtitle,
} from '../../../styles/components/Desktop/Admin/Categories';
import LoadingSpinner from '../UI/LoadingSpinner';

function SelectCover({ selectedCategory }: { selectedCategory: string }) {
  const { docs } = useFirestore('images', selectedCategory.toLowerCase());
  console.log(docs);
  let images;
  if (docs) {
    images = docs.map((doc, key) => {
      return <GalleryItem key={key} img={doc.url}></GalleryItem>;
    });
  }

  return (
    <CoverSelectContainer>
      <Subtitle>Select a Cover</Subtitle>
      <Gallery>
        {!docs && <LoadingSpinner />}
        {images}
      </Gallery>
    </CoverSelectContainer>
  );
}

export default SelectCover;
