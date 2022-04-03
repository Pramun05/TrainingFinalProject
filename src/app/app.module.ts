import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ClaimComponent } from './claim/claim.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PremiumcalculatorComponent } from './premiumcalculator/premiumcalculator.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PlansComponent } from './plans/plans.component';
import { PolicytypeComponent } from './policytype/policytype.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { insuranceService } from './Services/insurance.service';
import { registrationService } from './Services/Registration.service';
import { LoginService } from './Services/login.service';
import { planService } from './Services/plan.service';
import { policyService } from './Services/policytype.service';
import { paymentService } from './Services/payment.service';
import { userloginService } from './Services/userlogin.service';
import { claimservice } from './Services/claim.service';
import { adminloginService } from './Services/adminlogin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RenewComponent } from './renew/renew.component';
import { renewinsuranceService } from './Services/renew.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AdminlayoutComponent,
    AdminloginComponent,
    ClaimComponent,
    ContactComponent,
    HomeComponent,
    InsuranceComponent,
    PremiumcalculatorComponent,
    LoginComponent,
    PaymentComponent,
    PlansComponent,
    PolicytypeComponent,
    UserloginComponent,
    UserpageComponent,
    RenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [insuranceService,registrationService,LoginService,planService,policyService,paymentService,userloginService,claimservice,adminloginService,renewinsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
