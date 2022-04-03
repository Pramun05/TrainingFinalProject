import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminloginService } from '../Services/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private fb : FormBuilder, private alservice:adminloginService, private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  adminloginform=this.fb.group({
    Email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required]],
               
  });

//post

  adminlogin: any={};
  result : any;
  login()
  {
    debugger;
    console.log( this.adminloginform.value);
    this.alservice.insertadminlogin(this.adminloginform.value).subscribe(
      (data: any) => {
        this.result=data,console.log(this.result) 

        debugger;
        if(data !== "Invalid") {

          alert("Welcome Admin");
         this.router.navigate(['adminlayout']);

        } 
        else
        {
          alert("check the Credentials");
        }
      }
    );

}
}



