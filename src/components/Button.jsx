import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';

const Button = ({ onSmash }) => {
  // This array holds the names of the buttons
  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  // This function takes the button name as input and calls the updateObjState function
  const hunldeClick = (btnName) => {
    onSmash(btnName);
  };

  return (
    <ul className="keys-container">
      {keys.map((key) => (
        <li className="key" key={key}><button className="btn" type="button" onClick={() => hunldeClick(key)} key={key}>{key}</button></li>
      ))}
    </ul>
  );
};

Button.propTypes = {
  onSmash: PropTypes.func.isRequired,
};

export default Button;
