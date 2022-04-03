import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  pnumber: any;
  cstatus:any;
  ngOnInit(): void {
    debugger;
   this.pnumber=localStorage.getItem("pnumber");
   

  }
  buyinsuranceroute()
  {
    this.route.navigate(['insurance']);
  }

  claimroute()
  {
    this.route.navigate(['claim']);
  }

  renewroute()
  {
    this.route.navigate(['renew']);
  }

  calculatorroute()
  {
    this.route.navigate(['calculate']);
  }

  paymentroute()
  {
    this.route.navigate(['payment']);
  }
  

}
