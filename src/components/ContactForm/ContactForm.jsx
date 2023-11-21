import { nanoid } from 'nanoid';
import { useState } from 'react';

const ContactForm = ({ contacts }) => {
  const [contact, setContact] = useState({
    id: '',
    name: '',
    number: '',
  });

  const getContactInfo = e => {
    const { name, value } = e.target;
    setContact({ ...contact, id: nanoid(), [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    contacts.push(contact);
    console.log(contacts);
    setContact({ id: '', name: '', number: '' });
  };

  return (
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
  );
};

export default ContactForm;
