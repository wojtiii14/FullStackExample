// src/contact/contact.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll(): Contact[] {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Contact | undefined {
    return this.contactService.findOne(id);
  }

  @Post()
  create(@Body() contact: Omit<Contact, 'id'>): Contact {
    return this.contactService.create({ ...contact, id: new Date().toISOString() });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() contact: Partial<Contact>): Contact | null {
    return this.contactService.update(id, contact);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.contactService.remove(id);
  }
}
