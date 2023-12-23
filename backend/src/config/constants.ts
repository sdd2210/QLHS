import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConstants {
  // Database
  static KEY_DB_CHILD = 'db_child';

  // Security
  static KEY_COOKIE_AUTH = 'auth-cookie';
  static SALT_ROUNDS = 10;
  static EMAIL_TIMEOUT = 5000;
  static EXCEL_CUSTOMER_TEMPLATE = 'templates/ExportCustomer.xlsx';
  static EXCEL_CUSTOMER_TEMPLATE_NAME = 'danh_sach_khach_hang.xlsx';
  static EXCEL_ORDER_TEMPLATE = 'templates/ExportOrder.xlsx';
  static EXCEL_ORDER_TEMPLATE_NAME = 'danh_sach_hoa_don.xlsx';
  static PASSWORD_SEND_TEMPLATE = 'templates/email.template.hbs';
  static PASSWORD_RESET_TEMPLATE = 'templates/resetpwdemail.template.hbs';
  static PASSWORD_SEND_TITLE =
    '[Gia Phả] Đăng kí dùng thử dịch vụ Đại Việt Online';
  static PASSWORD_RESET_TITLE =
    '[Gia Phả] Thay đổi mật khẩu tài khoản sử dụng dịch vụ Đại Việt Online';
}
