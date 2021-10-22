/* eslint-disable react/prop-types */
import React from 'react';

const FilterInput = (props) => {
  const { updateFilter } = props;
  return (
    <div className="col d-flex align-items-center justify-content-center">
      <input type="text" className="input-form" placeholder="Search for" onChange={updateFilter} />
    </div>
  );
};
export default FilterInput;
