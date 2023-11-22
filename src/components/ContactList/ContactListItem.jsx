const ContactListItem = ({ onRemove, name, number }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button value={name} onClick={onRemove}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
