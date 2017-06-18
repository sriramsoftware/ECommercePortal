import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()

export class LoginService {
    private apiUrl : string = "";

    constructor(private _http: Http){

    }

    authenticate(username : string, password: string): Observable<boolean> {
        return this._http.get(this.apiUrl).map((response: Response) => <boolean>response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    private handleError(error : Response){
        return Observable.throw(error.json());
    }
}