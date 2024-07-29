import { ContactService } from './contact.service';
import { Contact } from './contact.interface';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    findAll(): Contact[];
    findOne(id: string): Contact | undefined;
    create(contact: Omit<Contact, 'id'>): Contact;
    update(id: string, contact: Partial<Contact>): Contact | null;
    remove(id: string): boolean;
}
