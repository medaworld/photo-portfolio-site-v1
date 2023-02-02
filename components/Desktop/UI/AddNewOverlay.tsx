import React, { useState } from 'react';
import {
  Buttons,
  DeleteOverlayContainer,
  ErrorMsg,
} from '../../../styles/components/Desktop/UI/AddNewOverlay';
import Modal from '../UI/Modal';
import Button from './Button';

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
  const [error, setError] = useState<string>();
  function inputChangeHandler(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setInput(event.target.value);
  }

  function submitHandler() {
    if (input.split(' ').join('').length > 0) {
      onSubmit(input);
    } else {
      setError('Please enter valid data');
      setInput('');
    }
  }

  const placeholder = `New ${type}...`;
  return (
    <Modal onClose={onClose}>
      <DeleteOverlayContainer>
        <p>New {type}</p>
        <ErrorMsg>{error}</ErrorMsg>
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={inputChangeHandler}
        />
        <Buttons>
          <Button text={'Submit'} onClick={submitHandler} />
          <Button text={'Cancel'} onClick={onClose} />
        </Buttons>
      </DeleteOverlayContainer>
    </Modal>
  );
}

export default React.memo(AddNewOverlay);
