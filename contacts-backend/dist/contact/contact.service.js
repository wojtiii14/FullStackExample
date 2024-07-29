"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const contact_memory_1 = require("./contact.memory");
let ContactService = class ContactService {
    findAll() {
        return (0, contact_memory_1.getContacts)();
    }
    findOne(id) {
        return (0, contact_memory_1.getContactById)(id);
    }
    create(contact) {
        return (0, contact_memory_1.addContact)(contact);
    }
    update(id, contact) {
        return (0, contact_memory_1.updateContact)(id, contact);
    }
    remove(id) {
        return (0, contact_memory_1.deleteContact)(id);
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)()
], ContactService);
//# sourceMappingURL=contact.service.js.map