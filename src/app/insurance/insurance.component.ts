import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { insuranceService } from '../Services/insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  constructor(private fb : FormBuilder,private insservice:insuranceService, private router:Router) { }

  ngOnInit(): void {
  }

  insuranceform=this.fb.group({
    manufacturer:['',[Validators.required]],
 model:['',[Validators.required]],

        drivinglicence:['',[Validators.required]],

          purchasedate:['',[Validators.required]],

          registrationnumber:['',[Validators.required,Validators.pattern("^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$")]],

              enginenumber:['',[Validators.required]],

                chassisnumber:['',[Validators.required]],
                email:['',[Validators.required,Validators.email]],
                VehicleType:[''],
               
  })

//post

  insurance: any ={};
  result : any;
  addinsurance()
  {
    console.log( this.insuranceform.value);
    this.insservice.insertvechiledata(this.insuranceform.value).subscribe(
     
      (data: any) =>
       {
        debugger;
        this.result=data,console.log(this.result) 


        if(data !== "Please check whether Chassis number, Registration number and Engine number is unique!!")
         {
          this.router.navigate(['plans']);
        }
        else
        {
          alert("Please check whether Chassis number, Registration number and Engine number is unique")
        }
      }
    );
   
    
  }
   
 
 
  }



