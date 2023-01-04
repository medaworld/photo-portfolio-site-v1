import { Progress } from '../../styles/components/ui/ProgressBar';

function ProgressBar(props: { progress: number }) {
  return <Progress fill={props.progress + '%'}></Progress>;
}

export default ProgressBar;
