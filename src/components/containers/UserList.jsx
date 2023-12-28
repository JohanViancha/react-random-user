import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserListView from '../view/UserList';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loadgin, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [filterUser, setFilterUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );
        const { results } = response.data;
        console.log(results);
        setUsers([...users, ...results]);
        setLoading(false);
        setFilterUser([...users, ...results])
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    getData();
  }, [page]);

  const handleLoad = () => {
    setPage(page + 1);
  };

  const handleFilter = (e) => {
    const filtered = users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(e.target.value) ||
        user.name.last.toLowerCase().includes(e.target.value)
    );
    setFilterUser(filtered)
  };

  return (
    <UserListView
      users={filterUser}
      loadgin={loadgin}
      error={error}
      onLoad={handleLoad}
      onFilter={handleFilter}
    />
  );
};

export default UserList;
