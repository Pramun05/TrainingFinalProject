import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { renewinsuranceService } from '../Services/renew.service';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {

  constructor(private fb:FormBuilder,private renewservice:renewinsuranceService,private router:Router) { }

  ngOnInit(): void {
  }

  renewinsuranceform=this.fb.group({
    
    registrationnumber:['',[Validators.required,Validators.pattern("^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$")]],
    
    PolicyNumber:['',[Validators.required]],
    
   email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
   PaymentDate:['',[Validators.required]],
    mobilenumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    
    
    
  })
  
  get CID()
  {
    return this.renewinsuranceform.get('CID');
  }

  get registrationNumber()
  {
    return this.renewinsuranceform.get('registrationnumber');
  }
    get PolicyNumber()
    {
      return this.renewinsuranceform.get('PolicyNumber');
    }
      get email()
  {
    return this.renewinsuranceform.get('email');
  }

  get PaymentDate()
  {
    return this.renewinsuranceform.get('PaymentDate');
  }

  get mobilenumber()
  {
    return this.renewinsuranceform.get('mobilenumber');
  }
  

    //post
    
 renewinsurance:any={};
 
 result:any;
 addrenew()
 {
  debugger;
  
  this.renewservice.insertinsurance(this.renewinsuranceform.value).subscribe(
    (data:any)=>
    {this.result=data,console.log(this.result)
      
     if(data=="Record Added!!")
   {
     window.alert("Claim Recorded");
     this.router.navigate(['home']);

   }
   else{
     window.alert("Check the policy number");
   }
 }
    
    );
  }

}
