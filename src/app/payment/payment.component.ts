import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { paymentService } from '../Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private fb : FormBuilder,private payservice:paymentService, private router:Router) { }

  ngOnInit(): void {
  }
  paymentform=this.fb.group({
    policynumber:['',[Validators.required]],
    paymentmode:['',[Validators.required]],

    bank:['',[Validators.required]],

    dateofpayment:['',[Validators.required]],

    amount:['',[Validators.required]],

    })

    //post

  payment: any ={};
  result : any;
  addpayment()
  {
    console.log( this.paymentform.value);
    this.payservice.insertpayment(this.paymentform.value).subscribe(
      (data: any) => {
        this.result=data,console.log(this.result) 

        if(data !== "Some Error Occured!!!") {
          alert("payment has been done successfully!")
          this.router.navigate(['home']);
        }
        else
          {
            alert("Some error occured")
          }

        }
      
    );

      }
}



