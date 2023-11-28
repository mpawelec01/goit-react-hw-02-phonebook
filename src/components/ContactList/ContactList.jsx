import ContactListItem from './ContactListItem';

const ContactList = ({ setPhonebook, phonebook, filteredContacts }) => {
  const removeContact = id => {
    const removing = phonebook.contacts.filter(contact => contact.id !== id);
    setPhonebook({ ...phonebook, contacts: removing });
  };
  return (
    <ul>
      {phonebook.filter === ''
        ? phonebook.contacts?.map(item => (
            <ContactListItem
              key={item.id}
              name={item.name}
              number={item.number}
              onRemove={removeContact}
              id={item.id}
            />
          ))
        : filteredContacts?.map(item => (
            <ContactListItem
              key={item.id}
              name={item.name}
              number={item.number}
              onRemove={removeContact}
              id={item.id}
            />
          ))}
    </ul>
  );
};

export default ContactList;
