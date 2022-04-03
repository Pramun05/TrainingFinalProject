import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RenewInsurance } from "../Model/renew.model"



@Injectable()
export class renewinsuranceService
{
    
     constructor(private http:HttpClient)
     {
         
     }

    //.NET Core Url
    readonly url="http://localhost:46576/api/Renew";

    
   /* //Post
    insertRenewInsurance(ins:any)
    {
        debugger;
        return this.http.post(this.uri,ins,{responseType:'text'});
    }*/

    //post
    insertinsurance( RenewInsurance :any)
    {
        
        return this.http.post(this.url,RenewInsurance,{responseType:'text'});
    }
}