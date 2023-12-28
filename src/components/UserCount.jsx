import React, { Component } from 'react';
import './styles/UserCount.css';

export class UserCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      text: 'Mi estado inicial',
    };
  }

  handlerAdd = (event) => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  handlerSubstract() {
    this.setState((prev) => {
      return {
        count: prev.count - 1,
      };
    });
  }

  render() {
    return (
      <div className='count'>
        <h2>Contador de usuarios</h2>
        <h3>{this.state.text}</h3>
        <h3>{this.state.count}</h3>
        <button onClick={this.handlerAdd}>Aumentar</button>
        <button onClick={this.handlerSubstract}>Diminuir</button>
      </div>
    );
  }
}

export default UserCount;
