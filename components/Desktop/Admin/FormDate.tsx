import {
  FormDateContainer,
  FormDateInput,
  FormInput,
} from '../../../styles/components/Desktop/Admin/Upload';
import FormSelect from './FormSelect';

function FormDate() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentYear = new Date().getFullYear();
  return (
    <FormDateContainer>
      <label>Date taken</label>
      <FormDateInput>
        <FormSelect options={months} placeholder={'Month'} />
        <input
          placeholder="Day"
          type="number"
          min={1}
          max={31}
          step="1"
          style={{ borderBottom: 'none' }}
        />
        <input
          placeholder="Year"
          type="number"
          min={1900}
          max={2099}
          step="1"
          style={{ borderBottom: 'none' }}
        />
      </FormDateInput>
    </FormDateContainer>
  );
}

export default FormDate;
