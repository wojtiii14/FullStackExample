import { Contact } from './contact.interface';
export declare const getContacts: () => Contact[];
export declare const getContactById: (id: string) => Contact;
export declare const addContact: (contact: Contact) => Contact;
export declare const updateContact: (id: string, updatedContact: Partial<Contact>) => Contact;
export declare const deleteContact: (id: string) => boolean;
