import{ HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { adminlogin } from "../Model/adminlogin.model";

@Injectable()
export class adminloginService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:46576/api/Login";




//Adding new customer data

insertadminlogin(logininfo:any)
    {
        debugger;
        return this.http.post(this.uri,logininfo,{responseType:'text'});
    }

}