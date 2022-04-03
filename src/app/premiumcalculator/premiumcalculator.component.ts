import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premiumcalculator',
  templateUrl: './premiumcalculator.component.html',
  styleUrls: ['./premiumcalculator.component.css']
})
export class PremiumcalculatorComponent implements OnInit {

  constructor(private fb : FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  calculateform=this.fb.group({
    car:['',[Validators.required]],
    fuel:['',[Validators.required]],
    year:['',[Validators.required]],
    price:['',[Validators.required]],
    
    
  });


// public brand!: string;
// public fuel!: string;
// public year!: number;
 //public price!: number;
  public premium!: number;
//declaration of variables for calculating premium amount
idv_rate:number=0.05;
presentdate:Date=new Date();
presentyear:number=this.presentdate.getFullYear();
diff:number=0;
idv:number=0;

getPremium():void{
 debugger;
 
 this.diff=this.presentyear-this.calculateform.value.year;
 if(this.diff> 1 && this.diff < 2){this.idv_rate=0.15;} 
 else if(this.diff>2&&this.diff<3){this.idv_rate=0.20;}
 else if(this.diff>3&&this.diff<4){this.idv_rate=0.30;} 
 else if(this.diff>4&&this.diff<5){this.idv_rate=0.40;} 
 else if(this.diff>5){this.idv_rate=0.5;}
 else {this.idv_rate=0.05;}
 this.idv=this.calculateform.value.price-this.idv_rate*this.calculateform.value.price;  
 this.premium=this.idv*0.03




}

}
