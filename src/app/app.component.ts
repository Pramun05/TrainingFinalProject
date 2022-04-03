/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
}*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app/Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'General_Insurance';

  constructor(private loginservice:LoginService,private userrouter:Router) { }
usercheck: any;
userchecklogoff:any;
  ngOnInit() {
debugger;

     //To avoid calling the method through url
     if(this.loginservice.loginsessionvariable)
     {
       this.usercheck=true;
       this.userchecklogoff=false;
     }
     else
     {
       this.usercheck=false;
       this.userchecklogoff=true;
       this.userrouter.navigate(['/registration']);
     }
     console.log( this.usercheck);
  }

  //calling dologoff method from loginservice
  // logOff()
  // {
  //   debugger;
  //   this.loginservice.dologoff();
   
  // }
  
  login()
  {
    debugger;
    if(this.loginservice.loginsessionvariable)
    {
      setTimeout(() => {
        this.usercheck=false;
      this.userchecklogoff=true;
      }, );
      

    }
    else
    {
      setTimeout(() => {
        this.usercheck=true;
      this.userchecklogoff=false;
      }, );
      
      
    }

  }
 
}

