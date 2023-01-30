import { Dispatch, SetStateAction } from 'react';
import { Category, Images } from '../../../helpers/organizers/types';
import {
  GalleryContainer,
  Gallery,
  GallerySection,
  SectionImages,
} from '../../../styles/components/Desktop/Admin/GalleryView';
import Loader from '../UI/Loader';
import SelectableImage from '../UI/SelectableImage';
import FilterSelector from './FilterSelector';

export default function GalleryView({
  fetchedImages,
  onItemSelect,
  selectedImages,
  selectedCategory,
  setSelectedCategory,
}: {
  fetchedImages: Images;
  onItemSelect: (doc: any) => void;
  selectedImages: any[];
  selectedCategory?: Category;
  setSelectedCategory?: Dispatch<SetStateAction<Category>>;
}) {
  const categoryImages = fetchedImages?.map((doc, key) => {
    return (
      <SelectableImage
        key={key}
        url={doc.url}
        selected={selectedImages.includes(doc)}
        onClick={() => onItemSelect(doc)}
      />
    );
  });

  return (
    <GalleryContainer>
      <Gallery>
        <FilterSelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {!categoryImages && <Loader />}
        <GallerySection>
          <SectionImages>{categoryImages}</SectionImages>
        </GallerySection>
      </Gallery>
    </GalleryContainer>
  );
}
