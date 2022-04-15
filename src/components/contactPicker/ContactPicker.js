import React from 'react';

export const ContactPicker = ({ contacts, onContactChange }) => {
  return (
    <select name='ContactPicker' onChange={onContactChange}>
      <option value=''>No Contact is Selected</option>
      {contacts.map((contact) => {
        return (
          <option vavlue={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};

export default ContactPicker;
