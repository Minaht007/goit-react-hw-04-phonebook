export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
