import { useState } from 'react';
import {
  Arrow,
  FormOption,
  FormOptions,
  FormSelectTrigger,
  FormSelectWrapper,
} from '../../../styles/components/Desktop/Admin/Upload';
import { LightTheme } from '../../../styles/themes/LightTheme';
import Icon from '../UI/Icon';

import arrow from '/public/icons/downArrow.png';

function FormSelect({
  options,
  placeholder,
}: {
  options: string[];
  placeholder: string;
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function showOptionsHandler() {
    setShowOptions((prev) => !prev);
  }

  return (
    <FormSelectWrapper>
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
          {options.map((option) => {
            function selectOptionHandler() {
              setSelectedOption(option);
              setShowOptions(false);
            }
            return (
              <FormOption onClick={selectOptionHandler}>{option}</FormOption>
            );
          })}
        </FormOptions>
      )}
    </FormSelectWrapper>
  );
}

export default FormSelect;
