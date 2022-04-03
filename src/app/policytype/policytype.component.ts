import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { policyService } from '../Services/policytype.service';

@Component({
  selector: 'app-policytype',
  templateUrl: './policytype.component.html',
  styleUrls: ['./policytype.component.css']
})
export class PolicytypeComponent implements OnInit {

  constructor(private fb:FormBuilder,private polservice:policyService,private router:Router) { }

  ngOnInit(): void {
  }
  policyform=this.fb.group({
    
    ContactNo:['',[Validators.required]],
    Email:['',[Validators.required,Validators.email]],
    
    
  });

  //post
  //object
  policytype :any={};
  result : any;
  addpolicytype()
  
  {
    debugger;
    console.log( this.policyform.value);
    this.polservice.insertpolicytype(this.policyform.value).subscribe((data: any)=>{
      debugger;
      
      this.result=data,console.log(this.result)
    
      
      window.alert( this.result );

      if(data !== "Some Error Occured!!!") {
        this.router.navigate(['payment']);
      }
      else
        {
          alert("Please check the values")
        } 
      
    });
   // window.alert("policy added");
  }
  


}


