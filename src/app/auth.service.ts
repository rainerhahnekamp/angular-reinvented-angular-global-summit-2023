import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  #loggedIn$ = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.#loggedIn$.asObservable();

  login() {
    this.#loggedIn$.next(true);
  }
  logout() {
    this.#loggedIn$.next(false);
  }
}
