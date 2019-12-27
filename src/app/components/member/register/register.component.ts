import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  position = ['Admin','Cashier']
  constructor(private location: Location,private networkService : NetworkService) { }

  ngOnInit() {
  }

  register(form:NgForm){
    this.networkService.register(form.value).subscribe(
      data=>{
        alert(data.message);
        this.location.back();

      },
      error=>{
        alert(JSON.stringify(error));
      }
    )
  }
  checkPasswordMatch(form:NgForm) : boolean{
    const value = form.value;
    return value.password !== '' && value.password !== value.confirmpassword;
  }
  goBack(){
    this.location.back()
  }

}
