import {
  Check,
  CoverTitle,
  ImageWrapper,
  SectionImage,
} from '../../../styles/components/Desktop/UI/SelectableImage';

import CheckIcon from '/public/icons/check.png';

export default function SelectableImage({
  url,
  selected,
  onClick,
  text,
  onlyOne,
}: {
  url: string;
  selected: boolean;
  onClick?: () => void;
  text?: string;
  onlyOne?: boolean;
}) {
  return (
    <ImageWrapper onClick={onClick} onlyOne={onlyOne}>
      <Check selected={selected}>
        <img id="preview" src={CheckIcon.src} alt="" />
      </Check>
      {text && <CoverTitle>{text}</CoverTitle>}
      {url && <SectionImage src={url} />}
    </ImageWrapper>
  );
}
