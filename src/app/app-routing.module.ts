import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ClaimComponent } from './claim/claim.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PlansComponent } from './plans/plans.component';
import { PolicytypeComponent } from './policytype/policytype.component';
import { PremiumcalculatorComponent } from './premiumcalculator/premiumcalculator.component';
import { RegistrationComponent } from './registration/registration.component';
import { RenewComponent } from './renew/renew.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"insurance",component:InsuranceComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"plans",component:PlansComponent},
  {path:"policytype",component:PolicytypeComponent},
  {path:"adminlayout",component:AdminlayoutComponent},
  {path:"payment",component:PaymentComponent},
  {path:"calculate",component:PremiumcalculatorComponent},
  {path:"userpage",component:UserpageComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"contact",component:ContactComponent},
  {path:"claim",component:ClaimComponent},
  {path:"home",component:HomeComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"renew",component:RenewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
