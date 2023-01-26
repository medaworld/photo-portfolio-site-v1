import { Dispatch, SetStateAction, useEffect } from 'react';
import {
  AdminViewWindow,
  Gallery,
  GallerySection,
  SectionImages,
} from '../../../styles/components/Desktop/Admin/AdminMain';

import Loader from '../UI/Loader';
import SelectableImage from '../UI/SelectableImage';

export default function AdminGallery({
  fetchedDocs,
  onItemSelect,
  selectedItems,
}: {
  fetchedDocs: any[] | undefined;
  onItemSelect: (doc: any) => void;
  selectedItems: any[];
  selectedSidebarItem: string;
}) {
  useEffect(() => {}, [selectedItems]);

  const categoryImages = fetchedDocs?.map((doc, key) => {
    let url;
    if (doc.coverImg) {
      url = doc.coverImg;
    } else {
      url = doc.url;
    }
    let selected;
    if (selectedItems.includes(doc)) {
      selected = true;
    } else {
      selected = false;
    }
    let text;
    if (doc.description) {
      text = null;
    } else if (doc.subcategory) {
      text = doc.subcategory;
    } else if (doc.category) {
      text = doc.category;
    }
    return (
      <SelectableImage
        key={key}
        url={url}
        selected={selected}
        text={text}
        onClick={() => onItemSelect(doc)}
      />
    );
  });

  return (
    <AdminViewWindow>
      {!categoryImages && <Loader />}
      <Gallery>
        <GallerySection>
          <SectionImages>{categoryImages}</SectionImages>
        </GallerySection>
      </Gallery>
    </AdminViewWindow>
  );
}
