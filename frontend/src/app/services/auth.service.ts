import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseApiService } from './base-api.service';
import { ChangeModel } from 'src/app/models/auth/change.model';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'api/SalesManager');
  }

  login(username: string, pwd: string) {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    
    return this.http.post<any>(`auth/login`,
        {username: username, password: pwd},
        httpOptions);
}

  changePassword = (data: any) => {
    return this.http.post(`auth/resetpassword`,data,);
  }

  logout = () => {
    return this.http.post<any>(`auth/logout`,{},);
  }

  resetPassword = (data: any) => {
    return this.http.post(`auth/reset_pass`,data,);
  }
  getInfor(){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      withCredentials: true,
  };
    return this.http.post<any>('auth/infor_user',{}, httpOptions);
  }
  getPrivilegeList(){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      withCredentials: true,
  };
    return this.http.get<any>('auth/privilege', httpOptions);
  }

  forgotPassword(email){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      withCredentials: true,
  };
    return this.http.post<any>('auth/forgot_pwd',{email}, httpOptions);
  }
}
