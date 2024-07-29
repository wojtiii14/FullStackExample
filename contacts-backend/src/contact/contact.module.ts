// src/contact/contact.module.ts

import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

@Module({
  imports: [], // Usuń wszelkie importy związane z TypeORM
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService], // Eksportuj serwis, jeśli jest używany w innych modułach
})
export class ContactModule {}
