import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../image/logo512.png';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <IconButton edge='start'>
            <img
              src={Logo}
              alt='logo'
              height='30px'
            />
          </IconButton>
          <Link
            component={RouterLink}
            to='/'
            color='inherit'
          >
            Inicio
          </Link>
          <Link
            component={RouterLink}
            to='/Form'
            color='inherit'
          >
            Formulario
          </Link>

          <Link
            component={RouterLink}
            to='/List'
            color='inherit'
          >
            Lista
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
