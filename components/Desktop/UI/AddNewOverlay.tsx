import React, { useState } from 'react';
import {
  Buttons,
  DeleteOverlayContainer,
} from '../../../styles/components/Desktop/UI/AddNewOverlay';

import Modal from '../UI/Modal';

function AddNewOverlay({
  onClose,
  onSubmit,
  type,
}: {
  onClose: () => void;
  onSubmit: (input: string) => void;
  type: string;
}) {
  const [input, setInput] = useState('');
  function inputChangeHandler(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setInput(event.target.value);
  }

  function submitHandler() {
    onSubmit(input);
  }

  const placeholder = `New ${type}...`;
  return (
    <Modal onClose={onClose}>
      <DeleteOverlayContainer>
        <p>New {type}</p>
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={inputChangeHandler}
        />
        <Buttons>
          <button onClick={submitHandler}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </Buttons>
      </DeleteOverlayContainer>
    </Modal>
  );
}

export default React.memo(AddNewOverlay);
