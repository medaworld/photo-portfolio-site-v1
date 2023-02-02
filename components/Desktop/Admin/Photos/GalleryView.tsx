import { useRef, useState } from 'react';

import {
  GalleryContainer,
  GalleryImages,
} from '../../../../styles/components/Desktop/Admin/GalleryView';

import Loader from '../../UI/Loader';
import SelectableImage from '../../UI/SelectableImage';
import FilterSelector from '../Shared/FilterSelector';
import InfiniteFetch from '../../../../helpers/functions/infiniteFetch';

export default function GalleryView({
  onItemSelect,
  selectedImages,
}: {
  onItemSelect: (doc: any) => void;
  selectedImages: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(undefined);
  const { docs, lastKey, loading, postNextBatch } =
    InfiniteFetch(selectedCategory);
  const galleryInnerRef = useRef<HTMLDivElement>();

  function scrollHandler() {
    const { scrollTop, scrollHeight, clientHeight } = galleryInnerRef.current;
    if (Math.floor(scrollTop) == scrollHeight - clientHeight) {
      fetchMore();
    }
  }

  function fetchMore() {
    if (lastKey && lastKey.length > 0) {
      postNextBatch(lastKey);
    }
  }

  const categoryImages = docs?.map((doc, key) => {
    return (
      <SelectableImage
        key={key}
        url={doc.url}
        selected={selectedImages.includes(doc)}
        onClick={() => onItemSelect(doc)}
        onlyOne={docs.length < 2}
      />
    );
  });

  return (
    <GalleryContainer onScroll={scrollHandler} ref={galleryInnerRef}>
      <FilterSelector
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {!docs && <Loader />}
      {docs && <GalleryImages>{categoryImages}</GalleryImages>}
      {loading && <p>Loading...</p>}
    </GalleryContainer>
  );
}
