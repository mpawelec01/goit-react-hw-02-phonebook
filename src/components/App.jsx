import { useState } from 'react';
import { nanoid } from 'nanoid';

export const App = () => {
  const [phonebook, setPhonebook] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  });

  const [filteredContacts, setFilteredContacts] = useState(phonebook.contacts);

  const [contact, setContact] = useState({
    id: '',
    name: '',
    number: '',
  });

  const getContactInfo = e => {
    const { name, value } = e.target;
    setContact({ ...contact, id: nanoid(), [name]: value });
  };

  const handleFilterChange = e => {
    const searchTerm = e.target.value;
    setPhonebook({ ...phonebook, filter: searchTerm });
    console.log(searchTerm);
    const filteredItems = phonebook.contacts?.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(filteredItems);
    console.log(filteredContacts);
  };

  const handleSubmit = e => {
    e.preventDefault();
    phonebook.contacts.push(contact);
    console.log(phonebook.contacts);
    setContact({ id: '', name: '', number: '' });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={getContactInfo}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={contact.number}
            onChange={getContactInfo}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input
          type="text"
          value={phonebook.filter}
          onChange={handleFilterChange}
          placeholder="Type to search"
        />
      </label>
      <ul>
        {phonebook.filter === ''
          ? phonebook.contacts?.map(item => (
              <li key={item.id}>
                {item.name}: {item.number}
              </li>
            ))
          : filteredContacts?.map(item => (
              <li key={item.id}>
                {item.name}: {item.number}
              </li>
            ))}
      </ul>
    </div>
  );
};
