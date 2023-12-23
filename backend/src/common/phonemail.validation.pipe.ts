/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PipeTransform, Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class PhoneMailValidationPipe implements PipeTransform<any> {

  transform(value: any) {
    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phone = /^\+?([0-9]{1,5})\)?[-. ]?([0-9]{1,5})[-. ]?([0-9]{1,5})$/;
    const checkEmail = email_regex.test(value.email) || !value.email;
    if (checkEmail === false) {
      throw new HttpException(
        'Email không đúng định dạng',
        HttpStatus.FORBIDDEN,
      );
    }
    const checkPhone = phone.test(value.phone) || !value.phone;
    if (checkPhone === false) {
      throw new HttpException(
        'Số điện thoại không đúng định dạng',
        HttpStatus.FORBIDDEN,
      );
    }

    return value;
  }
}
