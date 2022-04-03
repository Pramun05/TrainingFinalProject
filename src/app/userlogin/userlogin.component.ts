import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userloginService } from '../Services/userlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  usr:any={};
  err: any;
  email: any;
  
  constructor(private fb : FormBuilder, private ulservice:userloginService, private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  userloginform=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required]],
               
  });

//post

  userlogin: any ={};
  result : any;
  login()
  {
    
    console.log( this.userloginform.value);
    this.ulservice.insertuserlogin(this.userloginform.value).subscribe(
      (data: any) => {
        this.result=data,console.log(this.result) 

        debugger;
        if(data == "Invalid") {
          debugger;
          
          alert("Check the user credentials");
          return;

        } 
        else
        {
          this.getpnumber();
        }
      }
    );


    }   


    getpnumber()
    {
      debugger;
         this.http.get("http://localhost:46576/api/userpage/" + this.userloginform.value.email).subscribe(
          (data: any) => {
            debugger;
            localStorage.setItem( "pnumber",data);
            this.router.navigate(['userpage']);
          });
    }

}
