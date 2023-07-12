import PropTypes from 'prop-types';

const Output = ({ value }) => (
  <div>
    <form action="">
      <input type="text" value={value} className="Output" readOnly />
    </form>
  </div>
);

Output.defaultProps = {
  value: '3',
};

Output.propTypes = {
  value: PropTypes.string,
};

export default Output;
