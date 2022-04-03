import{ Injectable} from "@angular/core";

import{ HttpClient} from "@angular/common/http";
import{ plan } from "../Model/plan.model"

@Injectable()
export class planService
{

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:46576/api/plan";




//Adding new plan data

insertplan(pln:any)
    {
        debugger;
        return this.http.post(this.uri,pln,{responseType:'text'});
    }

}