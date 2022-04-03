import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { claim } from '../Model/claim.model';
import { claimservice } from '../Services/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private cservice:claimservice,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  claimform=this.fb.group({
    PolicyNumber:['',[Validators.required]],
    ContactNo:['',[Validators.required]],
    Reason:[''],
  

  })
  
//post
  
  clm:claim={};
  result:any;
  
  addclaim()
  {
    debugger;
   
     this.cservice.insertclaim(this.claimform.value).subscribe(
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
