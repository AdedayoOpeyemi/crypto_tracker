import React from 'react';
import PropTypes from 'prop-types';

const FilterInput = (props) => {
  const { updateFilter } = props;
  return (
    <div className="col d-flex align-items-center justify-content-center">
      <input type="text" className="input-form" placeholder="Search for" onChange={updateFilter} />
    </div>
  );
};

FilterInput.propTypes = {
  updateFilter: PropTypes.shape.isRequired,
};

export default FilterInput;
