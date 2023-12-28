import React, { useEffect, useMemo, useState } from 'react';
import { useCounter } from '../CustomHooks/useCounter';

const Count = () => {
  const { increment, decremennt, count, reset } = useCounter(0);
  const [state, setState] = useState(false);

  const bigProcess = (time) => {
    for (let index = 0; index < time; index++) {
      console.log('Me ejecuté');
    }
  };

  useEffect(() => {
    console.log('state count ha cambiado');
  }, []);

  const bigProcessNemo = useMemo(() => bigProcess(count), [count]);

  return (
    <div className='count'>
      <h2>Contador de usuarios</h2>
      <h3>Mi estado inicial</h3>
      <h3>{count}</h3>
      <h4>{bigProcessNemo}</h4>
      <button onClick={increment}>Aumentar</button>
      <button onClick={reset}>Reiniciar</button>

      <button onClick={decremennt}>Diminuir</button>
      <button onClick={() => setState(!state)}>Click</button>
    </div>
  );
};

export default Count;
