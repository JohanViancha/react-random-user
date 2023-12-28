import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import {  Outlet  } from 'react-router-dom';

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth='lg'><Outlet /></Container>
      <Footer />;
    </>
  );
};

export default Layout;
