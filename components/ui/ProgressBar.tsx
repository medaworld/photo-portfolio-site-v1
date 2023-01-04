import {
  Progress,
  ProgressContainer,
} from '../../styles/components/ui/ProgressBar';

function ProgressBar(props: { progress: number }) {
  return (
    <ProgressContainer>
      <Progress fill={props.progress + '%'}></Progress>
    </ProgressContainer>
  );
}

export default ProgressBar;
