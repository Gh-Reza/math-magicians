import React from 'react';
import './Calculator.css';

const InputOutput = () => (
  <div>
    <form action="">
      <input type="text" value={0} className="inputOutput" />
    </form>
  </div>
);

const Button = () => {
  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <ul className="keys-container">
      {keys.map((key) => (
        <li className="key key-ac" key={key}>{key}</li>
      ))}
    </ul>
  );
};

const Calculator = () => (
  <div className="calculator-container">
    <InputOutput />
    <Button />
  </div>
);
export default Calculator;
