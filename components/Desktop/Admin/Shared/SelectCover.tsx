import useFirestore from '../../../../helpers/hooks/useFirestore';
import {
  CoverSelectContainer,
  Gallery,
  GalleryItem,
  ImgContainer,
  Subtitle,
} from '../../../../styles/components/Desktop/Admin/ListView';
import Loader from '../../UI/Loader';
import SelectableImage from '../../UI/SelectableImage';

export default function SelectCover({
  formTitle,
  selectedTitle,
  onImgChange,
  enteredImg,
  type,
}: {
  formTitle: string;
  selectedTitle: string;
  onImgChange: (img: string) => void;
  enteredImg: string;
  type?: string;
}) {
  const { docs } = useFirestore('images', type, selectedTitle);

  let images: any;
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
        <SelectableImage url={enteredImg} selected={false} text={formTitle} />
      </ImgContainer>
    </CoverSelectContainer>
  );
}
