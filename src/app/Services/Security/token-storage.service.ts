import { Injectable } from '@angular/core';
const TOKEN_KEY = 'access_token';
const USER_KEY = 'auth-user';
const ROLE_KEY = 'role-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut(): void {
    window.localStorage.clear();
  }


  public saveData(token: any): void {
    const decodedToken = this.decode(token);
    if (decodedToken) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, token.sub); // Assurez-vous que votre API renvoie également l'id
    localStorage.setItem(ROLE_KEY, token.role); // Assurez-vous que votre API renvoie également le rôle
  }

  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  getId(): number | null {
    const userId = localStorage.getItem(USER_KEY);
    return userId ? Number(userId) : null;
  }

  getRole(): string | null {
    return localStorage.getItem(ROLE_KEY);
  }


  remove(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(ROLE_KEY);
  }

  decode(payload: any): any {
    return JSON.parse(atob(payload));
  }

  payload(token: string): any {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  isValid(): boolean {
    const token = this.getToken();
    const id = this.getId();

    if (token && id) {
      const payload = this.payload(token);
      return id === payload.id;
    }

    return false;
  }
}
