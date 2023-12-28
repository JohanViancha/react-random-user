import React, { useState } from 'react';
import ItemUser from '../components/ItemUser';
import Title from '../components/Title';
import UserForm from '../components/UserForm';

const Form = () => {
  const [user, setUser] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Title text='Ingresa tu propio usuario' />
      <ItemUser user={user} />
      <br />
      <UserForm
        onChange={handleChange}
        user={user}
      />
    </>
  );
};

export default Form;
