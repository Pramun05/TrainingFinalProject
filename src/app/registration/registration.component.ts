import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator,Validators,AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import {registration} from '../Model/Registration.model'
import { Router } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { LoginService } from '../Services/login.service';
import { registrationService } from '../Services/Registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private regservice:registrationService,private router:Router,private AppComponent:AppComponent,private loginservice:LoginService,) { }

  ngOnInit(): void {
    this.loginservice.loginsessionvariable=true;
    
    this.AppComponent.login();
  }

  registrationform=this.fb.group({
    firstname:['',[Validators.required,Validators.minLength(3)]],
    lastname:['',[Validators.required]],
    address:['',[Validators.required]],
    email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    dob:['',[Validators.required]],
    ContactNo: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    
  });

  //post

  registration: any ={};
  result : any;
  addcustomer()
  {
    debugger;
    console.log( this.registrationform.value);
    this.regservice.insertcustomerdata(this.registrationform.value).subscribe((data: any)=>{this.result=data,console.log(this.result)
    
      if(data !== "Some Error Occured!!!") {
        alert("Successfully Registered")
        this.router.navigate(['userlogin']);
      }
      else
        {
          alert("Please check the values you have entered")
        }
    });
   // window.alert("Check wheather the details are correct");
  }
  
  route()
  {
    this.router.navigate(['userlogin']);
  }

}
