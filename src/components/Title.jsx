import React from 'react';
import './styles/Title.css';
import PropTypes  from 'prop-types'


const Title = ({text}) => {
  return <h1 className='title'>{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired
}

Title.defaultProps ={
  text: 'Titulo por defectp'
}
export default Title;
