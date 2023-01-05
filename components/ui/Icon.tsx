import { StaticImageData } from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const IconImg = styled.div<{ img: string; color?: string }>`
  display: flex;
  mask-image: url(${(p) => p.img});
  background-color: ${(p) =>
    p.color ? p.theme.colors.background : p.theme.colors.primary};
  align-self: center;
  width: 100%;
  height: 100%;
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  transition: 0.5s;

  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

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
