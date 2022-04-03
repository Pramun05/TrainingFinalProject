import{ Injectable} from "@angular/core";

import{ HttpClient} from "@angular/common/http";
import { userlogin } from "../Model/userlogin.model";

@Injectable()
export class userloginService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:46576/api/userlogin";




//Adding new customer data

insertuserlogin(ins:any)
    {
        debugger;
        return this.http.post(this.uri,ins,{responseType:'text'});
    }

}