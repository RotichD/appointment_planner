import React from 'react';
import ContactPicker from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContactChange = (e) => {
    setContact(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='title'
            required
            value={title}
            onChange={onTitleChange}
            placeholder='Appointment Title'
          />
        </label>
        <label>
          <ContactPicker
            name='contact'
            value={contact}
            required
            onChange={onContactChange}
            placeholder='For...'
            contacts={contacts.map((contact) => contact.name)} //pass an array of the names only
          />
        </label>
        <label>
          <input
            type='date'
            name='date'
            required
            min={getTodayString()}
            value={date}
            onChange={onDateChange}
          />
        </label>
        <label>
          <input
            type='time'
            name='time'
            required
            value={time}
            onChange={onTimeChange}
          />
          <input type='submit' />
        </label>
      </form>
    </div>
  );
};
