import{ Injectable} from "@angular/core";

import{ HttpClient} from "@angular/common/http";
import{ policytype } from "../Model/policytype.model"

@Injectable()
export class policyService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:46576/api/Policytype";




//Adding new customer data

insertpolicytype(pol:any)
    {
        debugger;
        return this.http.post(this.uri,pol,{responseType:'text'});
    }

}