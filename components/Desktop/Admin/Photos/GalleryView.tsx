import {
  GalleryContainer,
  Gallery,
  GallerySection,
  SectionImages,
} from '../../../../styles/components/Desktop/Admin/AdminMain';

import Loader from '../../UI/Loader';
import SelectableImage from '../../UI/SelectableImage';
import FilterSelector from '../Categories/FilterSelector';

export default function GalleryView({
  fetchedDocs,
  onItemSelect,
  selectedItems,
}: {
  fetchedDocs: any[] | undefined;
  onItemSelect: (doc: any) => void;
  selectedItems: any[];
}) {
  const categoryImages = fetchedDocs?.map((doc, key) => {
    return (
      <SelectableImage
        key={key}
        url={doc.url}
        selected={selectedItems.includes(doc)}
        onClick={() => onItemSelect(doc)}
      />
    );
  });

  return (
    <GalleryContainer>
      <Gallery>
        <FilterSelector selectedCategory={[]} setSelectedCategory={() => {}} />
        {!categoryImages && <Loader />}
        <GallerySection>
          <SectionImages>{categoryImages}</SectionImages>
        </GallerySection>
      </Gallery>
    </GalleryContainer>
  );
}
