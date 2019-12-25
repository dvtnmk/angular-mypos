import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
    if(this.authService.isLogin()){
      this.router.navigate(['/stock'])
    }
  }

  login(form: NgForm){
    if(true){
      this.authService.login('Abc1234')
      this.router.navigate(['/stock'])
    }else{
      alert('Login failure')
    }
    // alert(JSON.stringify(form.value))
  }
}
