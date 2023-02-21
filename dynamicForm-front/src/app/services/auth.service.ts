import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User | null>;
  private eventSubject: Subject<boolean> = new Subject<boolean>();
  public user: Observable<User | null>;
  private loggedIn = false;

  constructor(private router: Router,
    private http: HttpClient) { 
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
      
    }

    public get userId(){
      return this.userValue.userId
    }

  public get userValue() {
      return this.userSubject.value;
    }

  login(email: string, password: string) {
    return this.http.post<any>(`http://localhost:8080/auth/login`, { email, password })
        .pipe(map(user => {
          console.log(user)
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
  }
  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  isLoggedIn(){
    console.log(this.userSubject.value)
    if(this.userSubject.value){
      return true
    }
    return false
  }
}
