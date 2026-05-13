import { Injectable, signal } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser = signal<User | null>(null);

  get user() {
    return this.currentUser.asReadonly();
  }

  login(username: string) {
    const user: User = {
      id: Date.now(),
      name: username
    };

    this.currentUser.set(user);
  }

  logout() {
    this.currentUser.set(null);
  }

  isLoggedIn() {
    return this.currentUser() !== null;
  }
}