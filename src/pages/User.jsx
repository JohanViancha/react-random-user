import React from 'react';
import ItemUser from '../components/ItemUser';
import { useParams } from 'react-router-dom';
import { userList } from '../data';
import { Box } from '@mui/material';

const User = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      margin: '24px 8px',
      height: '70vh',
    },
  };
  const { id } = useParams();
  const userSimple = userList.find((user) => user.id === id);
  return (
    <Box sx={styles.container}>
      {' '}
      {userSimple && <ItemUser user={userSimple} />}{' '}
    </Box>
  );
};

export default User;
