// src/contact/contact.memory.ts

import { Contact } from './contact.interface';

let contacts: Contact[] = [];

export const getContacts = () => contacts;
export const getContactById = (id: string) => contacts.find(contact => contact.id === id);
export const addContact = (contact: Contact) => {
  contacts.push(contact);
  return contact;
};
export const updateContact = (id: string, updatedContact: Partial<Contact>) => {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updatedContact };
    return contacts[index];
  }
  return null;
};
export const deleteContact = (id: string) => {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    return true;
  }
  return false;
};
