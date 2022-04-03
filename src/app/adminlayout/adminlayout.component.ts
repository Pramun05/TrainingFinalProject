import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import{AppComponent} from '../app.component';

import{claim} from '../Model/claim.model';





@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {
 
  
  

  
 

  constructor(private AppComponent:AppComponent,private loginservice:LoginService,private http:HttpClient) { }
  arry:any;
  ngOnInit(): void {
    debugger;
    this.loginservice.loginsessionvariable=false;
    
this.AppComponent.login();



this.http.get("http://localhost:46576/api/Admin/" ).subscribe(
  (data: any) => {
    debugger;
   
    this.arry=data;
  });
  }

  Approve()
  {
    alert("Successfully Approved")
  }

 
  
 
}
