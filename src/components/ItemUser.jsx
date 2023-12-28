import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Modal, Paper } from '@mui/material';

function ItemUser(props) {
  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    console.log(props);
    try {
      await axios.delete(`http://localhost:3000/users/${props.user.id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setOpen(true);
  };
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: '8px auto',
        display: 'flex',
        alignItems: 'center',
        background: '#1976d2',
      }}
    >
      <CardMedia
        component='img'
        image='/logo192.png'
        title='Imagen de usuario'
        sx={{ flex: 1 }}
      />
      <CardContent sx={{ flex: 2 }}>
        <Typography variant='h6'>
          <strong>Nombre: </strong> {props.user.name}
        </Typography>

        <Typography variant='h6'>
          <strong>País: </strong> {props.user.country}
        </Typography>
        <Typography variant='h6'>
          <strong>Correo:</strong>
          {props.user.email}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {props.isEdit && (
            <Button
              component={Link}
              to={`/edit/${props.user.id}`}
              variant='contained'
              color='secondary'
            >
              Editar
            </Button>
          )}

          {props.isDelete && (
            <Button
              variant='contained'
              color='secondary'
              onClick={handleModal}
            >
              Eliminar
            </Button>
          )}
        </Box>
      </CardContent>
      <Modal
        open={open}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '20%',
            width: '30%',
          }}
        >
          <Typography>¿Está seguro de eliminar este usuario?</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '50%',
            }}
          >
            <Button
              variant='contained'
              color='primary'
              onClick={handleDelete}
            >
              Aceptar
            </Button>

            <Button
              variant='contained'
              color='secondary'
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Card>
  );
}

ItemUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

ItemUser.defualtProps = {
  user: {
    name: '',
    country: '',
    email: '',
  },
};
export default ItemUser;
