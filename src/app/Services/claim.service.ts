import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http"
import { claim } from "../Model/claim.model";
@Injectable()
export class claimservice
{
    constructor(private http:HttpClient)
    {

    }

    readonly url="http://localhost:46576/api/Claim";

    //get

    getclaim()
    {
        return this.http.get(this.url);
    }

    //post

    insertclaim(c:claim)
    {
        return this.http.post(this.url,c,{responseType:'text'})
    }
}