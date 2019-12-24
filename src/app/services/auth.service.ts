import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({ // if delete must to regis in app.module.ts -> provinde
  providedIn: 'root'
})
export class AuthService {
  readonly keyAuth: string = environment.keyLocalAuthenInfo;
  constructor(private router:Router) { }
  
  isLogin() : boolean{
    return localStorage.getItem(this.keyAuth) !== null;
  }
  login(){
    localStorage.setItem(this.keyAuth,"token:12341234asddd");
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/login']);
  }
}
