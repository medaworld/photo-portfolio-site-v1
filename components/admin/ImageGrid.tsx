import {
  GridBox,
  GridLayout,
  GridRow,
} from '../../styles/components/admin/ImageGrid';

function ImageGrid(props: { urls: string[] | undefined }) {
  const { urls } = props;
  let images;
  if (urls) {
    images = urls.map((url) => {
      return <GridBox img={url}></GridBox>;
    });
    for (let i = 0; i < urls.length; i += 3) {}
  }

  return (
    <GridLayout>
      <GridRow>{images}</GridRow>
    </GridLayout>
  );
}

export default ImageGrid;
