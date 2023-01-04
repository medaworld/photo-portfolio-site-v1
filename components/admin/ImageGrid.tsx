import { GalleryItem, Gallery } from '../../styles/components/admin/ImageGrid';

class imageRow {}

function ImageGrid(props: { urls: string[] | undefined }) {
  const { urls } = props;
  let images;
  if (urls) {
    for (let i = 0; i < urls.length; i += 3) {}
    images = urls.map((url) => {
      return <GalleryItem img={url}></GalleryItem>;
    });
  }

  return <Gallery>{images}</Gallery>;
}

export default ImageGrid;
