/* eslint-disable react/prop-types */
import React from 'react';

const FilterInput = (props) => {
  const { updateFilter } = props;
  return (
    <input type="text" placeholder="Search for" onChange={updateFilter} />
  );
};
export default FilterInput;
