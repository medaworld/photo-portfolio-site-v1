import { useEffect, useState } from 'react';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Category, Subcategory } from '../../../../helpers/organizers/types';
import {
  CoverSelectContainer,
  Gallery,
  GalleryItem,
  ImgContainer,
  PrevImg,
  Subtitle,
} from '../../../../styles/components/Desktop/Admin/Categories';
import Loader from '../../UI/Loader';
import SelectableImage from '../../UI/SelectableImage';

function SelectCover({
  selectedCategory,
  selectedSubCategory,
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
  const [fetchedDocs, setFetchedDocs] = useState<any[]>();
  const { fetchFirestore } = useFirestore();

  useEffect(() => {
    fetchFirestore('images', 'category', selectedCategory.category).then(
      (docs) => setFetchedDocs(docs)
    );
  }, [selectedCategory]);

  let images;

  if (fetchedDocs) {
    images = fetchedDocs.map((doc, key) => {
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
        {!fetchedDocs && <Loader />}
        {images}
      </Gallery>
      <ImgContainer>
        <SelectableImage
          url={enteredImg}
          selected={false}
          text={
            type == 'subcategory'
              ? selectedCategory.subcategory
              : selectedCategory.category
          }
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ImgContainer>
    </CoverSelectContainer>
  );
}

export default SelectCover;
