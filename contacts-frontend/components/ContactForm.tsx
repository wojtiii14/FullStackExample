"use client";

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Contact } from '../types/contact';
import '../app/globals.css'; // Importowanie globalnych stylów

interface ContactFormProps {
    contactToEdit?: Contact;
    onSave: (contact: Contact) => void;
  }
  
  const ContactForm: React.FC<ContactFormProps> = ({ contactToEdit, onSave }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    useEffect(() => {
      if (contactToEdit) {
        setName(contactToEdit.name);
        setEmail(contactToEdit.email);
        setPhone(contactToEdit.phone || '');
      }
    }, [contactToEdit]);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      const newContact: Contact = {
        id: contactToEdit ? contactToEdit.id : uuidv4(),
        name,
        email,
        phone,
      };
  
      onSave(newContact);
      setName('');
      setEmail('');
      setPhone('');
    };
  
    return (
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">{contactToEdit ? 'Update Contact' : 'Add Contact'}</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;