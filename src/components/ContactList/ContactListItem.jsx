const ContactListItem = ({ onRemove, name, number, id }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button value={name} onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
