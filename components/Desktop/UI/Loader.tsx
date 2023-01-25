import {
  FirstSpan,
  LoaderWrapper,
  SecondSpan,
  ThirdSpan,
} from '../../../styles/components/Desktop/UI/Loader';

export default function Loader() {
  return (
    <LoaderWrapper>
      <FirstSpan />
      <SecondSpan />
      <ThirdSpan />
    </LoaderWrapper>
  );
}
