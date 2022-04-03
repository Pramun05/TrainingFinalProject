import { HttpClient } from '@angular/common/http';

import{Injectable} from '@angular/core'

import { Router } from '@angular/router';
@Injectable({providedIn:"root"})
export class LoginService
{
    constructor(private http:HttpClient,private userrouter:Router )
    {

    }
    readonly uri = "http://localhost:46576/api/Login";
     
  

    // checking employee  login  creditals from webapi
    empLogin(emp:any)
    {
    return  this.http.post(this.uri,emp);
    }

    //to check user in logged in  or not
  loginsessionvariable: any;
  loginuser:any
  loginCheck()
  {
      this.loginuser= sessionStorage.getItem('username');
      if(this.loginuser!="")
      {
          debugger;
          this.loginsessionvariable=true;
      }
      else{
          this.loginsessionvariable=false;
      }
    
  }


    //log off 
public loginuservariable:any;
   public dologoff()
    {
        debugger;
       
        sessionStorage.clear();
        this.loginuservariable=false;
       this.userrouter.navigate(['/registration']);
    }
}