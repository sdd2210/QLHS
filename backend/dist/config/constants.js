"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConstants = void 0;
const common_1 = require("@nestjs/common");
let AppConstants = class AppConstants {
};
AppConstants.KEY_DB_CHILD = 'db_child';
AppConstants.KEY_COOKIE_AUTH = 'auth-cookie';
AppConstants.SALT_ROUNDS = 10;
AppConstants.EMAIL_TIMEOUT = 5000;
AppConstants.EXCEL_CUSTOMER_TEMPLATE = 'templates/ExportCustomer.xlsx';
AppConstants.EXCEL_CUSTOMER_TEMPLATE_NAME = 'danh_sach_khach_hang.xlsx';
AppConstants.EXCEL_ORDER_TEMPLATE = 'templates/ExportOrder.xlsx';
AppConstants.EXCEL_ORDER_TEMPLATE_NAME = 'danh_sach_hoa_don.xlsx';
AppConstants.PASSWORD_SEND_TEMPLATE = 'templates/email.template.hbs';
AppConstants.PASSWORD_RESET_TEMPLATE = 'templates/resetpwdemail.template.hbs';
AppConstants.PASSWORD_SEND_TITLE = '[Gia Phả] Đăng kí dùng thử dịch vụ Đại Việt Online';
AppConstants.PASSWORD_RESET_TITLE = '[Gia Phả] Thay đổi mật khẩu tài khoản sử dụng dịch vụ Đại Việt Online';
AppConstants = __decorate([
    (0, common_1.Injectable)()
], AppConstants);
exports.AppConstants = AppConstants;
//# sourceMappingURL=constants.js.map