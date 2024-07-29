"use client";

import React, { useState, useEffect } from 'react';
import { Contact } from '../types/contact';
import ContactForm from './ContactForm';
import '../app/globals.css'; // Importowanie globalnych stylów

const ContactList: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);
  
    useEffect(() => {
      const savedContacts = localStorage.getItem('contacts');
      if (savedContacts) {
        setContacts(JSON.parse(savedContacts));
      }
    }, []);
  
    const handleSave = (contact: Contact) => {
      let updatedContacts = [];
      if (contactToEdit) {
        updatedContacts = contacts.map(c => c.id === contact.id ? contact : c);
      } else {
        updatedContacts = [...contacts, contact];
      }
      setContacts(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      setContactToEdit(null);
    };
  
    const handleEdit = (contact: Contact) => {
      setContactToEdit(contact);
    };
  
    const handleDelete = (id: string) => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };
  
    return (
      <div>
        <ContactForm contactToEdit={contactToEdit} onSave={handleSave} />
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button onClick={() => handleEdit(contact)}>Edit</button>
                    <button onClick={() => handleDelete(contact.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No contacts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ContactList;