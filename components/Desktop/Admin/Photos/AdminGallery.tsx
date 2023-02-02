import { useEffect, useState } from 'react';
import { Images } from '../../../../helpers/organizers/types';
import GalleryView from './GalleryView';
import GalleryViewDetailSideBar from './GalleryViewDetailSideBar';

export default function AdminGallery() {
  const [selectedImages, setSelectedImages] = useState<Images>([]);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);

  useEffect(() => {
    if (selectedImages.length > 0) {
      setShowDetailSidebar(true);
    } else {
      setShowDetailSidebar(false);
    }
  }, [selectedImages]);

  function itemSelectHandler(doc: any) {
    selectedImages.includes(doc)
      ? setSelectedImages(() => {
          return selectedImages.filter((item) => item !== doc);
        })
      : setSelectedImages(() => {
          return [...selectedImages, doc];
        });
  }

  function detailSidebarClose() {
    setShowDetailSidebar(false);
    setSelectedImages([]);
  }

  return (
    <>
      <GalleryView
        selectedImages={selectedImages}
        onItemSelect={itemSelectHandler}
        detailSidebarClose={detailSidebarClose}
      />
      {showDetailSidebar && (
        <GalleryViewDetailSideBar
          detailSidebarClose={detailSidebarClose}
          selectedImages={selectedImages}
        />
      )}
    </>
  );
}
