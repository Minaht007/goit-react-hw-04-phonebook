const Filter = ({ filterChange, filter }) => {
  return (
    <label>
      <span>Find contact by name</span>
      <input type="text" name="filter" value={filter} onChange={filterChange} />
    </label>
  );
};

export default Filter;
