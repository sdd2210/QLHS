"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexCommon = void 0;
const common_1 = require("@nestjs/common");
let RegexCommon = class RegexCommon {
    static regexVietnamese(str) {
        if (str === null || str === undefined)
            return '';
        str = str.toLowerCase();
        str = str.replace(/a|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, '[aàáạảãâầấậẩẫăằắặẳẵ]');
        str = str.replace(/e|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, '[eèéẹẻẽêềếệểễ]');
        str = str.replace(/i|ì|í|ị|ỉ|ĩ/g, '[iìíịỉĩ]');
        str = str.replace(/o|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, '[oòóọỏõôồốộổỗơờớợởỡ]');
        str = str.replace(/u|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, '[uùúụủũưừứựửữ]');
        str = str.replace(/y|ỳ|ý|ỵ|ỷ|ỹ/g, '[yỳýỵỷỹ]');
        str = str.replace(/d|đ/g, '[dđ]');
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
        str = str.replace(/\u02C6|\u0306|\u031B/g, '');
        str = str.replace(/ + /g, ' ');
        str = str.trim();
        str = str.replace(/!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/g, 'a  b  c  d');
        str = str.replace('$', 'a  b  c  d');
        str = str.replace('^', 'a  b  c  d');
        str = str.replace('?', 'a  b  c  d');
        return str.toLowerCase();
    }
    static regexVietnameseNor(str) {
        if (str === null || str === undefined)
            return '';
        str = str.toLowerCase();
        str = str.replace(/a|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/e|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/i|ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/o|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/u|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/y|ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/d|đ/g, 'd');
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
        str = str.replace(/\u02C6|\u0306|\u031B/g, '');
        str = str.replace(/ + /g, ' ');
        str = str.trim();
        str = str.replace(/!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/g, 'a  b  c  d');
        str = str.replace('$', 'a  b  c  d');
        str = str.replace('^', 'a  b  c  d');
        str = str.replace('?', 'a  b  c  d');
        return str.toLowerCase();
    }
};
RegexCommon = __decorate([
    (0, common_1.Injectable)()
], RegexCommon);
exports.RegexCommon = RegexCommon;
//# sourceMappingURL=regexVietnamese.js.map