import React from 'react';
import { Component } from 'react';

import { nanoid } from 'nanoid';

import AppStyle from './AppStyle.module.css';
import { FilterContact } from './FiltrContact/FilterContact';
import { ListContact } from './ListContact/ListContact';
import { FormContact } from './FormContact/FormContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const isIncontacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isIncontacts) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContacts = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== contactId;
        }),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getContacts();
    return (
      <div className={AppStyle.container}>
        <h1 className={AppStyle.primeryTitle}>Phonebook</h1>
        <FormContact onSubmit={this.addContact} />
        <h2 className={AppStyle.secondaryTitle}>Contacts </h2>
        <FilterContact value={filter} onChange={this.filterContacts} />
        <ListContact
          contacts={visibleContacts}
          onRemoveContact={this.removeContacts}
        />
      </div>
    );
  }
}
