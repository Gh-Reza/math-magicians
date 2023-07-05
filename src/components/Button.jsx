import React from 'react';
import './Calculator.css';

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

export default Button;
