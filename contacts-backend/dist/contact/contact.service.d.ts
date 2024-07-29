import { Contact } from './contact.interface';
export declare class ContactService {
    findAll(): Contact[];
    findOne(id: string): Contact | undefined;
    create(contact: Contact): Contact;
    update(id: string, contact: Partial<Contact>): Contact | null;
    remove(id: string): boolean;
}
