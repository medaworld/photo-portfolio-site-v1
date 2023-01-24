import React from 'react';
import {
  Buttons,
  DeleteOverlayContainer,
} from '../../../styles/components/Desktop/UI/DeleteOverlay';

import Modal from '../UI/Modal';

function DeleteOverlay(props: {
  onClose: () => void;
  onDelete: () => void;
  name: string;
}) {
  return (
    <Modal onClose={props.onClose}>
      <DeleteOverlayContainer>
        <p>Delete {props.name}?</p>
        <Buttons>
          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onClose}>Cancel</button>
        </Buttons>
      </DeleteOverlayContainer>
    </Modal>
  );
}

export default React.memo(DeleteOverlay);
