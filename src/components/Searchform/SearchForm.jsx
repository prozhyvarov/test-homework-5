import React, { useState } from 'react';
import propTypes from 'prop-types';

const SearchForm = ({ onFormSubmit }) => {

  const [value, setValue] = useState('');
  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit(value);
    setValue('');
  };
  const handleInputChange = event => {
    setValue(event.target.value.trim());
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        value={value}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search films..."
        required
        minLength={1}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  onFormSubmit: propTypes.func.isRequired,
};
export default SearchForm;
