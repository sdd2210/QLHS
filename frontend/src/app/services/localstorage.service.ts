import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get(key: string) {
    return JSON.parse(JSON.stringify(localStorage.getItem(key)));
  }

  set(key: string, val: any) {
    return localStorage.setItem(key, JSON.stringify(val));
  }

  clear() {
    return localStorage.clear();
  }
}
