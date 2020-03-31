import { createSelector } from "@reduxjs/toolkit";

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);

  return contacts.find(contact => contact.id === contactId);
};

export default {
  getContacts,
  getFilter,
  getFilteredContacts,
  getContactById
};
