import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string>('');
  private users: { [email: string]: string } = {}; // email: password

  isLoggedIn$ = this.loggedIn.asObservable();
  userName$ = this.userName.asObservable();

  register(email: string, password: string, name: string) {
    if (this.users[email]) throw new Error('Usuario ya existe');
    this.users[email] = password;
    this.login(email, password, name);
  }

  login(email: string, password: string, name?: string) {
    if (this.users[email] && this.users[email] === password) {
      this.loggedIn.next(true);
      this.userName.next(name || email);
    } else {
      throw new Error('Credenciales incorrectas');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.userName.next('');
  }
}