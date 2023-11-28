const Filter = ({ phonebook, setPhonebook }) => {
  const handleFilterChange = e => {
    const searchTerm = e.target.value;
    setPhonebook({ ...phonebook, filter: searchTerm });
  };
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={phonebook.filter}
        onChange={handleFilterChange}
        placeholder="Type to search"
      />
    </label>
  );
};

export default Filter;
