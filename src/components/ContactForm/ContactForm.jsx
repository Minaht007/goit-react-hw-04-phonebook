import { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // const newContact = {
    //   id: nanoid(),
    //   name: this.state.name,
    //   number: this.state.number,
    // };
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
    // this.reset();
  };

  handelChange = evt => {
    // evt.name.value
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handelChange}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>

        <label>
          Number
          <input
            onChange={this.handelChange}
            type="tel"
            name="number"
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
