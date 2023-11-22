import ContactListItem from './ContactListItem';

const ContactList = ({ setPhonebook, phonebook, filteredContacts }) => {
  const removeContact = e => {
    const removing = phonebook.contacts.filter(
      contact => contact.name !== e.target.value
    );
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
            />
          ))
        : filteredContacts?.map(item => (
            <ContactListItem
              key={item.id}
              name={item.name}
              number={item.number}
              onRemove={removeContact}
            />
          ))}
    </ul>
  );
};

export default ContactList;
