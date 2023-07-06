import React, { useState } from 'react';
import './Calculator.css';
import Output from './Output';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [outputValue, setOutpupValue] = useState('0');

  // This object holds the state of the calculator
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  const [objState, setObjState] = useState(obj);

  // This function takes the button name as input and updates the state of the calculator
  const updateObjState = (btnName) => {
    const newObj = calculate(objState, btnName);
    setObjState(newObj);
    setOutpupValue(newObj.next || newObj.total || '0');
  };

  return (
    <div className="calculator-container">
      <Output value={outputValue} />
      <Button onSmash={updateObjState} />
    </div>
  );
};
export default Calculator;
