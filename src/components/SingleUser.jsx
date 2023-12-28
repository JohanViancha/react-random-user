import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const SingleUser = ({ name, picture, location, email, phone }) => {
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
        image={`${picture.large}`}
        title='Imagen de usuario'
        sx={{ flex: 1 }}
      />
      <CardContent sx={{ flex: 2 }}>
        <Typography variant='h6'>
          <strong>Nombre: </strong> {`${name.first} ${name.last}`}
        </Typography>

        <Typography variant='h6'>
          <strong>País: </strong> {location.country}
        </Typography>
        <Typography variant='h6'>
          <strong>Correo:</strong>
          {email}
        </Typography>
        <Typography variant='h6'>
          <strong>Tlefono:</strong>
          {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

SingleUser.propTypes = {
  name: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
};

SingleUser.defualtProps = {
  name: {},
  location: {},
  email: '',
  phone: '',
  picture: {},
};

export default SingleUser;
