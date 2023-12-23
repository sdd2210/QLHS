import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProfileModel } from "../models/profile/profile.model";
import { BaseApiService } from "./base-api.service";

@Injectable({
          providedIn: 'root',
        })
export class ProfileService extends BaseApiService<ProfileModel> {
constructor(http: HttpClient) {
          super(http, '');
}

public regexVietnamese(str) {
  if (str === null || str === undefined) return '';
  str = str.toLowerCase();
  str = str.replace(
    /a|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
    'a',
  );
  str = str.replace(/e|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/i|ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(
    /o|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,
    'o',
  );
  str = str.replace(/u|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/y|ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/d|đ/g, 'd');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  //str = str +`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`;
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/g, 'a  b  c  d');
  str = str.replace('$', 'a  b  c  d');
  str = str.replace('^', 'a  b  c  d');
  str = str.replace('?', 'a  b  c  d');
  return str.toLowerCase();
}

}
