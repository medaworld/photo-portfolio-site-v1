import useFirestore from '../../../helpers/hooks/useFirestore';
import { Subcategory } from '../../../helpers/organizers/types';
import {
  CoverSelectContainer,
  Gallery,
  GalleryItem,
  ImgContainer,
  Subtitle,
} from '../../../styles/components/Desktop/Admin/ListView';
import Loader from '../UI/Loader';
import SelectableImage from '../UI/SelectableImage';

export default function SelectCover({
  selectedCategory,
  onImgChange,
  enteredImg,
  type,
}: {
  selectedCategory: any;
  selectedSubCategory?: Subcategory;
  onImgChange: (img: string) => void;
  enteredImg: string;
  type?: string;
}) {
  let fieldValue: string;
  if (type === 'category') {
    fieldValue = selectedCategory.category;
  } else if (type === 'subcategory') {
    fieldValue = selectedCategory.subcategory;
  }
  const { docs } = useFirestore('images', type, fieldValue);

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
          selected={enteredImg === doc.url ? true : false}
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
      <ImgContainer>
        <SelectableImage
          url={enteredImg}
          selected={false}
          text={
            type === 'subcategory'
              ? selectedCategory.subcategory
              : selectedCategory.category
          }
        />
      </ImgContainer>
    </CoverSelectContainer>
  );
}
