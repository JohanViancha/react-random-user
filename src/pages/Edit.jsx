import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemUser from '../components/ItemUser';
import Title from '../components/Title';
import UserForm from '../components/UserForm';

const Edit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
  });

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      const { data } = response;
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Title text='Edita un usuario' />
      <ItemUser user={user} />
      <br />
      <UserForm
        onChange={handleChange}
        user={user}
        isEdit
      />
    </>
  );
};

export default Edit;
