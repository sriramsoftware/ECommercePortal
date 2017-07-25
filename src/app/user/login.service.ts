import { Injectable } from "@angular/core";
import { Http,Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { GlobalConfig } from "app/shared/global.config";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { User } from "./user";
@Injectable()

export class LoginService {
    private apiUrl : string = "http://localhost:81/api/user/auth/";

    constructor(private _http: Http){
        console.log(GlobalConfig.WebApiUrl);
    }

    getUser(): Observable<User> {

        return this._http.get(this.apiUrl).map((response: Response) => response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    authenticate(user: User): Observable<boolean> {
        // return new Observable<true>();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.apiUrl,user,options).map((response: Response) =>
        { 
             if(response.status == 404)
             {
                 
             }
        })
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    private handleError(error : Response){
        return Observable.throw(error.json());
    }
}