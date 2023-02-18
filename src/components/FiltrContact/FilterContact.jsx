import PropTypes from 'prop-types';
import FilterModule from './FilterContact.module.css';

export const FilterContact = ({ value, onChange }) => {
  return (
    <label className={FilterModule.label}>
      <input
        className={FilterModule.input}
        type="text"
        placeholder="Find contacts by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
