import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = newContact => {
    const isInContacts = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isInContacts) {
      alert('This contact IS');
      return;
    }
    const normalizedContact = {
      ...newContact,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, normalizedContact],
      };
    });
  };

  delContact = id => {
    const deletedItem = this.state.contacts.filter(
      contact => contact.id === id
    );
    const itemsArr = JSON.parse(localStorage.getItem('deletedContacts')) || [];
    itemsArr.push(deletedItem);
    localStorage.setItem('deletedContacts', JSON.stringify(itemsArr));
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  handelChange = evt => {
    // evt.name.value
    this.setState({ [evt.target.name]: evt.target.value });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <section>
          <h1>Phonbook</h1>
          <ContactForm addContact={this.addContact} />
        </section>

        <section>
          <h2>Contacts</h2>
          <Filter filterChange={this.handelChange} filter={this.state.filter} />
          <ContactList
            contacts={filteredContacts}
            delContact={this.delContact}
          />
        </section>
      </>
    );
  }
}

export default App;
