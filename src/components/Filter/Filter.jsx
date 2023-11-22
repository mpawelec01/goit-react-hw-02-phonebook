const Filter = ({ phonebook, setPhonebook, setFilteredContacts }) => {
  const handleFilterChange = e => {
    const searchTerm = e.target.value;
    setPhonebook({ ...phonebook, filter: searchTerm });
    const filteredItems = phonebook.contacts?.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filteredItems);
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
