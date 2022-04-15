import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState(
    //if contacts exist we want to default to the first contact
    contacts.length > 0 ? contacts[0].name : ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);

    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          contacts={contacts}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
