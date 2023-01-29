import { useEffect, useState } from 'react';
import useFirestore from '../../../../helpers/hooks/useFirestore';
import { Subcategory } from '../../../../helpers/organizers/types';
import {
  CoverSelectContainer,
  Gallery,
  GalleryItem,
  ImgContainer,
  Subtitle,
} from '../../../../styles/components/Desktop/Admin/Categories';
import Loader from '../../UI/Loader';
import SelectableImage from '../../UI/SelectableImage';

function SelectCover({
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
  let fieldValue;
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
