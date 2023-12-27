"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneMailValidationPipe = void 0;
const common_1 = require("@nestjs/common");
let PhoneMailValidationPipe = class PhoneMailValidationPipe {
    transform(value) {
        const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phone = /^\+?([0-9]{1,5})\)?[-. ]?([0-9]{1,5})[-. ]?([0-9]{1,5})$/;
        const checkEmail = email_regex.test(value.email) || !value.email;
        if (checkEmail === false) {
            throw new common_1.HttpException('Email không đúng định dạng', common_1.HttpStatus.FORBIDDEN);
        }
        const checkPhone = phone.test(value.phone) || !value.phone;
        if (checkPhone === false) {
            throw new common_1.HttpException('Số điện thoại không đúng định dạng', common_1.HttpStatus.FORBIDDEN);
        }
        return value;
    }
};
PhoneMailValidationPipe = __decorate([
    (0, common_1.Injectable)()
], PhoneMailValidationPipe);
exports.PhoneMailValidationPipe = PhoneMailValidationPipe;
//# sourceMappingURL=phonemail.validation.pipe.js.map