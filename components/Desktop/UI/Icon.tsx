import { IconImg } from '../../../styles/components/Desktop/UI/Icon';

function Icon(props: {
  img: string;
  size: number;
  color?: string;
  onClose?: () => void;
}) {
  return (
    <div
      style={{ width: props.size, height: props.size }}
      onClick={props.onClose}
    >
      <IconImg img={props.img} color={props.color} />
    </div>
  );
}

export default Icon;
