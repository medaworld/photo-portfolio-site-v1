import { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Backdrop,
  CloseIcon,
  ModalOverlay,
} from '../../../styles/components/Desktop/UI/Modal';

import Icon from './Icon';

import closeIcon from '/public/icons/closeWindow.png';

export default function Modal(props: {
  children?: ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#secondOverlay');
    setMounted(true);
  }, []);
  return mounted && ref.current ? (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, ref.current)}
      {ReactDOM.createPortal(
        <CloseIcon>
          <Icon
            img={closeIcon.src}
            size={50}
            color={'light'}
            onClose={props.onClose}
          />
        </CloseIcon>,
        ref.current
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        ref.current
      )}
    </>
  ) : null;
}
