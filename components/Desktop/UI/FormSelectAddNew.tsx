import { useEffect, useRef, useState } from 'react';
import {
  Arrow,
  FormOption,
  FormOptions,
  FormSelectTrigger,
  FormSelectWrapper,
} from '../../../styles/components/Desktop/UI/FormSelect';
import AddNewOverlay from './AddNewOverlay';

import Icon from './Icon';

import arrow from '/public/icons/downArrow.png';

export default function FormSelectAddNew({
  options,
  placeholder,
  onChange,
  selected,
  disabled,
  onAddNew,
  type,
}: {
  options: string[] | undefined;
  placeholder: string;
  onChange: (option: any) => void;
  selected?: string;
  disabled?: boolean;
  onAddNew: (input: string) => void;
  type: string;
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAddNew, setShowAddNew] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  const handleClickOutside = (event: { target: Node } | any) => {
    if (!selectRef.current?.contains(event.target)) {
      setShowOptions(false);
    }
  };

  function showOptionsHandler() {
    setShowOptions((prev) => !prev);
  }

  useEffect(() => {
    if (selected) {
      setSelectedOption(selected);
    } else {
      setSelectedOption(null);
    }
  }, [selected]);

  function addNewHandler() {
    setShowOptions(false);
    setShowAddNew(true);
  }

  function closeHandler() {
    setShowAddNew(false);
  }
  function addNewSubmitHandler(input: string) {
    onAddNew(input);
    setShowAddNew(false);
  }

  return (
    <>
      {showAddNew && (
        <AddNewOverlay
          type={type}
          onClose={closeHandler}
          onSubmit={addNewSubmitHandler}
        />
      )}
      <FormSelectWrapper ref={selectRef} disabled={disabled}>
        <FormSelectTrigger onClick={showOptionsHandler}>
          <span>
            {!selectedOption && <p>{placeholder}</p>}
            {selectedOption && <p>{selectedOption}</p>}
          </span>
          <Arrow>
            <Icon img={arrow.src} size={15} />
          </Arrow>
        </FormSelectTrigger>
        {showOptions && (
          <FormOptions>
            {options?.map((option, key) => {
              function selectOptionHandler() {
                setSelectedOption(option);
                onChange(option);
                setShowOptions(false);
              }
              return (
                <FormOption onClick={selectOptionHandler} key={key}>
                  {option}
                </FormOption>
              );
            })}
            <FormOption onClick={addNewHandler}>Add new...</FormOption>
          </FormOptions>
        )}
      </FormSelectWrapper>
    </>
  );
}
