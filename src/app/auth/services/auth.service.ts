import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<User | undefined>(undefined);
  public user = this._user.asObservable();

  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asObservable();
  constructor(
    private router: Router
  ) { }


  login(user: User) {
    this._user.next(user);
    this._isAuthenticated.next(true);
    this.router.navigate(['/']);
  }

  signup(user: User) {
    this._user.next(user);
    this._isAuthenticated.next(true);
    this.router.navigate(['/']);
  }

  signout() {
    this._user.next(undefined);
    this._isAuthenticated.next(false);
    this.router.navigate(['/']);
  }
}
