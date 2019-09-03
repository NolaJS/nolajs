import React from 'react';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';

const MyCalendar = () => {
  return (
    <Calendar
      onSelect={date => console.log(date)}
      disabledDate={date => {
        return date.diff(new Date(), 'days') <= 0;
      }}
      showToday={false}
    />
  );
};

export default MyCalendar;
