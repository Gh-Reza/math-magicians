import React, { useState } from 'react';
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
    <div className="container">
      <div className="calc-page-wrapper row row-cols-1 row-cols-md-2">
        <div className="text-container col align-self-end align-self-md-center ">
          <p className="calc-text border-0 border-bottom-2">Let&rsquo;s do some math</p>
        </div>
        <div className="calculator-wrapper col align-self-center p-0">
          <div className="calculator-container border p-0">
            <Output value={outputValue} />
            <Button onSmash={updateObjState} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
