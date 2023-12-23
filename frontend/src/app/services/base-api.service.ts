import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseApiService<T> {
  public httpOptions;
  constructor(protected http: HttpClient, protected actionUrl: string) {
    this.httpOptions = {};
  }

  list(params?: any): Observable<T[]> {
    this.httpOptions = {
      params,
    };

    return this.http
      .get(`${this.actionUrl}`, this.httpOptions)
      .pipe(map((res: any) => res));
  }

  get(id: any, params?: any): Observable<T> {
    this.httpOptions = {
      params,
    };
    return this.http
      .get<T>(`${this.actionUrl}/${id}`, this.httpOptions)
      .pipe(map((res: any) => res));
  }

  create(data: any, params?: any, headers?: any): Observable<any> {
    this.httpOptions = {
      params,
      headers,
    };
    return this.http.post<T>(`${this.actionUrl}`, data, this.httpOptions);
  }

  update(data: any, id: any, params?: any): Observable<any> {
    this.httpOptions = {
      params,
    };
    return this.http.put<T>(`${this.actionUrl}/${id}`, data, this.httpOptions);
  }

  delete(id?: any, params?: any, databody?: any): Observable<any> {
    this.httpOptions = {
      params,
      body: databody,
    };
    return this.http.delete<T>(`${this.actionUrl}/${id}`, this.httpOptions);
  }
}
