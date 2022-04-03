import{ Injectable} from "@angular/core";

import{ HttpClient} from "@angular/common/http";
import{ payment } from "../Model/payment.model"

@Injectable()
export class paymentService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:46576/api/Payment";




//Adding new payment data

insertpayment(pay:any)
    {
        debugger;
        return this.http.post(this.uri,pay,{responseType:'text'});
    }

}