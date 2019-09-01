import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RequestUrlMethod } from '../models/RequestUrlMethod';
import { isUndefined } from 'util';

const url = 'https://localhost:9991/';

//A list of the requests that requires a token
const withoutTokenUrls:RequestUrlMethod[]=[{
  url:'https://localhost:9991/api/categories/',method:'GET'
}];

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user:User;

  constructor(private http: HttpClient) { }
  


  loginRequest(user : User): Observable<any> {
    return this.http.post<any>(url + 'login', { username: user.username, password: user.password },
      { observe: 'response' as 'body' })
      .pipe(map(resp => {
        let token:string = resp.headers.get('Authorization');
        token = token.replace('Bearer ','');
        localStorage.setItem('token', token);
        return resp;
      }));
  }


  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    return token!=null;
    // return a boolean reflecting 
    // whether or not the token is expired
    //return tokenNotExpired(token);
    //return true;
  }


  public logout(){
    localStorage.clear();
  }

  getCurrentUserRole(): string {
        try {
            //decode the token and get the role
            let token = localStorage.getItem('token') ;
            let role = (decode(token).sub);
            return role;
        }
        catch (Error) {
            return null;
        }
    }

    //A method that returns true if the request passed in the param require a token
    TokenNeeded(urlMethod:RequestUrlMethod):boolean{
        return withoutTokenUrls.find( urlMeth=> (urlMeth.url==urlMethod.url) && (urlMeth.method==urlMethod.method) ) == null;
    }

}
