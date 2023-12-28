import React, { useEffect, useState } from 'react';
import ItemUser from '../components/ItemUser';
import Title from '../components/Title';
import axios from 'axios';

const List = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      const { data } = response;
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Title text='Lista de usuarios' />
      {users.map((item, i) => (
        <ItemUser
          key={i}
          user={item}
          isEdit
          isDelete
        />
      ))}
    </>
  );
};

export default List;
