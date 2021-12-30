import { Fragment, Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './components/Filter/Filter';

import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import { SectionStyled } from './components/Contacts/SectionContacts.styled';

class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  onInput = e => {
    const form = e.currentTarget.name;
    this.setState({ [form]: e.currentTarget.value });
  };

  onClick = e => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const { name, number } = this.state;
    const id = nanoid();

    if (e.target.checkValidity()) {
      if (
        this.state.contacts.find(
          contact =>
            contact.name.toLowerCase().includes(name) &&
            contact.name.toLowerCase().includes(name).length === name.length,
        )
      ) {
        alert(`${name} is already in contacts`);
        return;
      }
      this.setState({
        contacts: [...this.state.contacts, { name, id, number }],
      });
    }
  };

  searchContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const contactNormalized = this.state.filter.toLowerCase();
    const contacts = this.state.contacts;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactNormalized),
    );
    // console.log(filteredContacts);
    return filteredContacts;
  };

  deleteContact = e => {
    const toDelete = e.currentTarget.id;
    let contacts = this.state.contacts.filter(
      contact => contact.id !== toDelete,
    );
    this.setState({ contacts: [...contacts] });
  };

  render() {
    const contacts = this.filterContacts();
    return (
      <Fragment>
        <Form onInput={this.onInput} onClick={this.onClick}></Form>
        <SectionStyled>
          <Filter
            value={this.state.filter}
            search={this.searchContacts}
          ></Filter>
          <Contacts
            contacts={contacts}
            deleteContact={this.deleteContact}
          ></Contacts>
        </SectionStyled>
      </Fragment>
    );
  }
}

export default App;
