import { useState } from 'react';

import {
  GalleryContainer,
  Gallery,
  GalleryImages,
} from '../../../../styles/components/Desktop/Admin/GalleryView';

import Loader from '../../UI/Loader';
import SelectableImage from '../../UI/SelectableImage';
import FilterSelector from '../Shared/FilterSelector';
import useFirestore from '../../../../helpers/hooks/useFirestore';

export default function GalleryView({
  onItemSelect,
  selectedImages,
}: {
  onItemSelect: (doc: any) => void;
  selectedImages: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(undefined);

  const { docs, loading } = useFirestore(
    'images',
    'category',
    selectedCategory,
    'timeCreated',
    'desc'
  );

  const categoryImages = docs?.map((doc, key) => {
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
        {loading && <Loader />}
        {!loading && <GalleryImages>{categoryImages}</GalleryImages>}
      </Gallery>
    </GalleryContainer>
  );
}
