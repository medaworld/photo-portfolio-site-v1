import React from 'react';
import {
  Buttons,
  DeleteOverlayContainer,
} from '../../../styles/components/Desktop/UI/DeleteOverlay';

import Modal from '../UI/Modal';
import Button from './Button';

function DeleteOverlay({
  onClose,
  onDelete,
  name,
}: {
  onClose: () => void;
  onDelete: () => void;
  name: string;
}) {
  return (
    <Modal onClose={onClose}>
      <DeleteOverlayContainer>
        <p>Delete {name}?</p>
        <Buttons>
          <Button text={'Delete'} onClick={onDelete} />
          <Button text={'Cancel'} onClick={onClose} />
        </Buttons>
      </DeleteOverlayContainer>
    </Modal>
  );
}

export default React.memo(DeleteOverlay);
