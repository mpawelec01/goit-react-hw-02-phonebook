const ContactList = ({ phonebook, filteredContacts }) => {
  return (
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
  );
};

export default ContactList;
