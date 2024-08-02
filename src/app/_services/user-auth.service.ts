import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): [] {
    const rolesString = localStorage.getItem('roles');
  if (rolesString !== null) {
    return JSON.parse(rolesString);
  }
  return [];     
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
    const tokenString = localStorage.getItem('jwtToken');
    if (tokenString !== null) {
      return tokenString;
    }
    return '';
  }

  public clear() {
    localStorage.clear;
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
