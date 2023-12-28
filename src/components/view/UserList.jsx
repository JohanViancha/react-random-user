import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import SingleUser from '../SingleUser';
import Modal from '../../components/Modal';

const UserList = ({ onFilter, onLoad, loadgin, users, error }) => {
  return (
    <>
      <TextField
        label='Buscar'
        onChange={onFilter}
      />
      {users.length === 0 ? (
        <Box
          align='center'
          height='100vh'
        >
          <Typography variant='h3'>No se encontraron usuarios</Typography>
        </Box>
      ) : (
        <Box height='100%'>
          {users.map(({ login, email, name, location, phone, picture }) => (
            <SingleUser
              key={login.uuid}
              name={name}
              email={email}
              location={location}
              phone={phone}
              picture={picture}
            />
          ))}
          <Box align='center'>
            <Button
              onClick={onLoad}
              variant='contained'
              color='secondary'
            >
              Cargar más
            </Button>
          </Box>
        </Box>
      )}

      {error && (
        <Typography
          color='rebeccapurple'
          align='center'
        >
          {error}
        </Typography>
      )}
      {loadgin && (
        <Modal>
          <CircularProgress color='secondary' />
        </Modal>
      )}
    </>
  );
};

export default UserList;
