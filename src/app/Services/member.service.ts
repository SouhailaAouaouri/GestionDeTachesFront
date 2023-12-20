import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const url = 'http://localhost:8080/api/members';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  public getProjectsByMemberUsername(username:string){
    return this.http.get(url+'/tasks/'+username);
  }
}
