import React, { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phoneNumber, email); //Adds contact if unique
      setName(''); //resets the state
      setPhoneNumber('');
      setEmail('');
    }
  };

  useEffect(() => {
    const checkIfDuplicate = () => {
      const duplicateObject = contacts.find((contact) => contact.name === name);
      return duplicateObject !== undefined;
    };

    if (checkIfDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? 'Error: Name Already Exists' : ''}
        </h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
