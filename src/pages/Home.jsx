import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Title from '../components/Title';
import UserList from '../components/containers/UserList';

const data = {
  name: 's',
  country: 'g',
  email: 'g',
  phone: 'a',
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '24px 8px',
    height: '100%',
  },
};

const Home = () => {
  return (
    <Box
      align='center'
      sx={styles.container}
    >
      <Title text='BIENVENIDO A USER RANDOM'></Title>
      <UserList />
      <Typography
        variant='body'
        align='center'
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        reprehenderit, obcaecati quam repellat ab commodi officiis velit minus
        deserunt rerum? Pariatur odit porro perspiciatis nobis delectus,
        cupiditate error quidem accusantium.
      </Typography>
    </Box>
  );
};

export default Home;
