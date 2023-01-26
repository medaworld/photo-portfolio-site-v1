import useFirestore from '../../../helpers/hooks/useFirestore';
import { Category, Subcategory } from '../../../helpers/organizers/types';
import {
  CoverSelectContainer,
  Gallery,
  GalleryItem,
  Subtitle,
} from '../../../styles/components/Desktop/Admin/Categories';
import Loader from '../UI/Loader';

function SelectCover({
  selectedCategory,
  selectedSubCategory,
  onImgChange,
  enteredImg,
}: {
  selectedCategory?: Category;
  selectedSubCategory?: Subcategory;
  onImgChange: (img: string) => void;
  enteredImg: string | null;
}) {
  let category;
  let callType;
  if (selectedCategory) {
    category = selectedCategory.category;
    callType = 'category';
  }
  if (selectedSubCategory) {
    category = selectedSubCategory.subcategory;
    callType = 'subcategory';
  }

  const { docs } = useFirestore('images', category, callType);

  let images;
  if (docs) {
    images = docs.map((doc, key) => {
      function clickHandler() {
        onImgChange(doc.url);
      }
      return (
        <GalleryItem
          key={key}
          img={doc.url}
          selected={enteredImg == doc.url ? true : false}
          onClick={clickHandler}
        />
      );
    });
  }

  return (
    <CoverSelectContainer>
      <Subtitle>Select a Cover</Subtitle>
      <Gallery>
        {!docs && <Loader />}
        {images}
      </Gallery>
    </CoverSelectContainer>
  );
}

export default SelectCover;
