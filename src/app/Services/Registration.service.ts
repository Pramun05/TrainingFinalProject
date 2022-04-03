import{ Injectable} from "@angular/core";

import{ HttpClient} from "@angular/common/http";
import{ registration} from "../Model/Registration.model"

@Injectable()
export class registrationService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:46576/api/Registration";




//Adding new customer data

insertcustomerdata(ins:any)
    {
        debugger;
        return this.http.post(this.uri,ins,{responseType:'text'});
    }
   
}