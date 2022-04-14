import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
}) => {
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onNameChange}
            required
            placeholder='Contact Name'
          />
        </label>
        <label>
          <input
            type='tel'
            name='phone number'
            value={phoneNumber}
            onChange={onPhoneChange}
            required
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"// Regex for US Phone format
            placeholder='Phone Number (###-###-####)'
          />
        </label>
        <label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onEmailChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"//Regex for email
            placeholder='Contact Email'
          />
        </label>

        <input type='submit' />
      </form>
    </div>
  );
};
