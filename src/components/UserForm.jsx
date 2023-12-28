import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import React from 'react';
import './styles/UserForm.css';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = (props) => {
  const { id,  name, country, email } = props.user;
  const navigate = useNavigate();

  const handleEdit = async (e) => {
    try {
      await axios.put(`http://localhost:3000/users/${id}`, props.user);
      navigate('/List');
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:3000/users', props.user);
      navigate('/List');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <FormControl
          fullWidth
          sx={{ margin: '20px 0' }}
          className='input-form'
        >
          <InputLabel>Nombre: </InputLabel>
          <Input
            type='text'
            name='name'
            onChange={props.onChange}
            value={name}
          />
          <FormHelperText>Ingresa tú nombre y tú apelido</FormHelperText>
        </FormControl>
        <br />
        <FormControl
          fullWidth
          sx={{ margin: '20px 0' }}
          className='input-form'
        >
          <InputLabel>País: </InputLabel>
          <Input
            type='text'
            name='country'
            onChange={props.onChange}
            value={country}
          />
          <FormHelperText>Ingresa su país</FormHelperText>
        </FormControl>

        <FormControl
          sx={{ margin: '20px 0' }}
          className='input-form'
          fullWidth
        >
          <InputLabel>Correo Electronico: </InputLabel>
          <Input
            type='text'
            name='email'
            onChange={props.onChange}
            value={email}
          />
          <FormHelperText>Ingresa su correo electronico</FormHelperText>
        </FormControl>
        <Box align='center'>
          {props.isEdit ? (
            <Button
              color='primary'
              variant='contained'
              onClick={handleEdit}
            >
              Editar
            </Button>
          ) : (
            <Button
              type='submit'
              color='primary'
              variant='contained'
            >
              {' '}
              Crear
            </Button>
          )}
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
