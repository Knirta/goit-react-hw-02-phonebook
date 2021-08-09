import React from "react";

const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </label>
  );
};

export default Filter;
