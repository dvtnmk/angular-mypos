import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  position = ['Admin','Cashier']
  constructor(private location: Location) { }

  ngOnInit() {
  }

  register(form:NgForm){
    alert(JSON.stringify(form.value));
  }
  checkPasswordMatch(form:NgForm) : boolean{
    const value = form.value;
    return value.password !== '' && value.password !== value.confirmpassword;
  }
  goBack(){
    this.location.back()
  }

}
