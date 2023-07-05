import React from 'react';
import './Calculator.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const InputOutput = ({ value }) => (
  <div>
    <form action="">
      <input type="text" value={value} className="inputOutput" />
    </form>
  </div>
);

InputOutput.defaultProps = {
  value: '3',
};

InputOutput.propTypes = {
  value: PropTypes.string,
};

export default InputOutput;
