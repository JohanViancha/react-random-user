import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const stlyes = {
  footer: {
    width: '100%',
    padding: '24px 0',
    background: '#1976d2',
    color: 'white',
  },
};

const Footer = () => {
  return (
    <footer style={stlyes.footer}>
      <Container maxWidth='md'>
        <Grid
          container
          align='center'
        >
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography variant='h5'>
              <strong>Politicas del sitio</strong>
            </Typography>

            <br />
            <Link
              href='#'
              color='inherit'
            >
              <Typography>Politicas de privacidad</Typography>
            </Link>
            <Link
              href='#'
              color='inherit'
            >
              <Typography>Terminos y condiciones</Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography variant='h5'>
              <strong>Servicios</strong>
            </Typography>

            <br />
            <Link
              href='#'
              color='inherit'
            >
              <Typography>Soporte</Typography>
            </Link>
            <Link
              href='#'
              color='inherit'
            >
              <Typography>Preguntas frecuentes</Typography>
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography variant='h5'>
              <strong>Contactanos</strong>
            </Typography>

            <br />
            <Link
              href='#'
              color='inherit'
            >
              <Typography>000000053</Typography>
            </Link>
            <Link
              href='#'
              color='inherit'
            >
              <Typography>email@example.com</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
