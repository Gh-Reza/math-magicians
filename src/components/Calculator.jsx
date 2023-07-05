import React, { useState } from 'react';
import './Calculator.css';
import InputOutput from './InputOutput';
import Button from './Button';

const Calculator = () => {
  const [inputValue] = useState('0');

  return (
    <div className="calculator-container">
      <InputOutput value={inputValue} />
      <Button />
    </div>
  );
};
export default Calculator;
