const ContactList = ({ contacts, delContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button type="button" onClick={() => delContact(contact.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
