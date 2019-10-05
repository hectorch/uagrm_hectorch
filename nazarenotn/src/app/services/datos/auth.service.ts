import { Injectable } from '@angular/core';
import { tap } from "rxjs/Operators";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User, Jwtresponse } from "../../models/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string = 'http:localhost:3000/api';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private http: HttpClient) { }

  register(user:User): Observable<Jwtresponse>{
    return this.http.post<Jwtresponse>(`${this.AUTH_SERVER}/user`,user).pipe(tap(
      (res:Jwtresponse)=>{
        if(res){
          this.sabeToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  login(user:User): Observable<Jwtresponse>{
    return this.http.post<Jwtresponse>(`${this.AUTH_SERVER}/login`,user).pipe(tap(
      (res:Jwtresponse)=>{
        if(res){
          this.sabeToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  logout(): void{
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIREN_IN");
  }

  private sabeToken(token: string, expiresIn: string):void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN ", expiresIn);
    this.token=token;
  }

  private getToken(): string{
    if(!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
