import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SessionService {

  setSession(isAdmin: boolean, urlToken: string) {
    sessionStorage.setItem('isAdmin', String(isAdmin));
    sessionStorage.setItem('urlToken', urlToken);
  }

  get isAdmin() {
    return sessionStorage.getItem('isAdmin') === 'true';
  }

  get urlToken() {
    return sessionStorage.getItem('urlToken') ?? null;
  }

  clear() {
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('urlToken');
  }

}
