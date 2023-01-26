import React from 'react';
import { SetStateAction, useEffect, useState } from 'react';
import {
  FormDateContainer,
  FormDateInput,
} from '../../../styles/components/Desktop/Admin/Upload';
import FormSelect from './FormSelect';

function FormDate({
  onChange,
  selectedDate,
}: {
  onChange: (date: Date) => void;
  selectedDate: Date | undefined;
}) {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState<number | string>('');
  const [selectedYear, setSelectedYear] = useState<number | string>('');

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

  const monthChangeHandler = (month: string) => {
    setSelectedMonth(month);
  };
  const dayChangeHandler = (event: {
    target: { value: SetStateAction<any> };
  }) => {
    setSelectedDay(event.target.value);
  };
  const yearChangeHandler = (event: {
    target: { value: SetStateAction<any> };
  }) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    if (selectedDate) {
      setSelectedMonth(months[selectedDate.getMonth()]);
      setSelectedDay(selectedDate.getDate());
      setSelectedYear(selectedDate.getFullYear());
    } else {
      setSelectedMonth('');
      setSelectedDay('');
      setSelectedYear('');
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      onChange(new Date(selectedMonth + selectedDay + ',' + selectedYear));
    }
  }, [selectedDay, selectedMonth, selectedYear]);

  return (
    <FormDateContainer>
      <label>Date taken</label>
      <FormDateInput>
        <FormSelect
          options={months}
          placeholder={'Month'}
          onChange={monthChangeHandler}
          selected={selectedMonth}
        />
        <input
          placeholder="Day"
          type="number"
          min={1}
          max={31}
          value={selectedDay}
          style={{ borderBottom: 'none' }}
          onChange={dayChangeHandler}
        />
        <input
          placeholder="Year"
          type="number"
          min={0}
          max={2099}
          value={selectedYear}
          style={{ borderBottom: 'none' }}
          onChange={yearChangeHandler}
        />
      </FormDateInput>
    </FormDateContainer>
  );
}

export default FormDate;
