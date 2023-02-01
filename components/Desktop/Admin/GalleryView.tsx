import { useEffect, useState } from 'react';
import { Category } from '../../../helpers/organizers/types';
import { useCollection } from 'react-firebase-hooks/firestore';

import { collection, orderBy, Query, query, where } from '@firebase/firestore';
import { projectFirestore } from '../../../helpers/firebase/config';

import {
  GalleryContainer,
  Gallery,
  GalleryImages,
} from '../../../styles/components/Desktop/Admin/GalleryView';

import Loader from '../UI/Loader';
import SelectableImage from '../UI/SelectableImage';
import FilterSelector from './FilterSelector';

export default function GalleryView({
  onItemSelect,
  selectedImages,
}: {
  onItemSelect: (doc: any) => void;
  selectedImages: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(undefined);
  const [ref, setRef] = useState<Query>();

  useEffect(() => {
    if (selectedCategory) {
      setRef(
        query(
          collection(projectFirestore, 'images'),
          where('category', '==', selectedCategory),
          orderBy('subcategory', 'asc')
        )
      );
    } else {
      setRef(
        query(
          collection(projectFirestore, 'images'),
          orderBy('timeCreated', 'desc')
        )
      );
    }
  }, [selectedCategory]);

  const [docs, setDocs] = useState<any[]>([]);
  const [images, loading, error] = useCollection(ref, {});

  useEffect(() => {
    if (images) {
      setDocs(
        images.docs.map((doc) => {
          return doc.data();
        })
      );
    }
  }, [images]);

  console.log(images);

  const loader = <Loader />;

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
        {loading && loader}
        {!loading && <GalleryImages>{categoryImages}</GalleryImages>}
        {error && <p>Error Loading</p>}
      </Gallery>
    </GalleryContainer>
  );
}
