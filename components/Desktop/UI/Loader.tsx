import {
  CenterWrapper,
  FirstSpan,
  LoaderWrapper,
  SecondSpan,
  ThirdSpan,
} from '../../../styles/components/Desktop/UI/Loader';

export default function Loader() {
  return (
    <CenterWrapper>
      <LoaderWrapper>
        <FirstSpan />
        <SecondSpan />
        <ThirdSpan />
      </LoaderWrapper>
    </CenterWrapper>
  );
}
