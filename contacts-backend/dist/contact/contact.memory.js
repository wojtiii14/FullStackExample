"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.addContact = exports.getContactById = exports.getContacts = void 0;
let contacts = [];
const getContacts = () => contacts;
exports.getContacts = getContacts;
const getContactById = (id) => contacts.find(contact => contact.id === id);
exports.getContactById = getContactById;
const addContact = (contact) => {
    contacts.push(contact);
    return contact;
};
exports.addContact = addContact;
const updateContact = (id, updatedContact) => {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts[index] = { ...contacts[index], ...updatedContact };
        return contacts[index];
    }
    return null;
};
exports.updateContact = updateContact;
const deleteContact = (id) => {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteContact = deleteContact;
//# sourceMappingURL=contact.memory.js.map