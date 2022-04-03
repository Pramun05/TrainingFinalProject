import{ Injectable} from "@angular/core";

import{ HttpClient} from "@angular/common/http";
import{insurance} from "../Model/insurance.model"

@Injectable()
export class insuranceService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:46576/api/insurance";




//Adding new product

insertvechiledata(ins:any)
    {
        debugger;
        return this.http.post(this.uri,ins,{responseType:'text'});
    }

}