// src/contact/contact.service.ts

import { Injectable } from '@nestjs/common';
import { Contact } from './contact.interface';
import { getContacts, getContactById, addContact, updateContact, deleteContact } from './contact.memory';

@Injectable()
export class ContactService {
  findAll(): Contact[] {
    return getContacts();
  }

  findOne(id: string): Contact | undefined {
    return getContactById(id);
  }

  create(contact: Contact): Contact {
    return addContact(contact);
  }

  update(id: string, contact: Partial<Contact>): Contact | null {
    return updateContact(id, contact);
  }

  remove(id: string): boolean {
    return deleteContact(id);
  }
}
