"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
class AppController {
    sendResponseError(res, message) {
        const result = {
            success: false,
            message: message,
        };
        return res.status(common_1.HttpStatus.BAD_REQUEST).send(result);
    }
    sendResponseForbidden(res, message) {
        const result = {
            success: false,
            message: message,
            status: common_1.HttpStatus.FORBIDDEN,
        };
        return res.status(common_1.HttpStatus.FORBIDDEN).send(result);
    }
    sendResponse(res, message, data) {
        const result = {
            success: true,
            message: message,
            data: data,
        };
        return res.status(common_1.HttpStatus.OK).send(result);
    }
}
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map