import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  private readonly reqresURL = "https://reqres.in/api/users?page";
  private readonly reqresKEY= environment.reqresApiKey;
  constructor(private http: HttpClient) {

   }

  getDataReqresByGetString = () => {
    return this.http.get<any>(`https://reqres.in/api/users?page=28api_key=${this.reqresKEY}`);
  };

  getDataReqresByGet = () => {
    return this.http.get<any>(this.reqresURL+'=2&'+'api_key='+this.reqresKEY);
  };

  getDataReqresByPost = (page: number) => {
    const headers = new HttpHeaders().set("x-api-key", this.reqresKEY);
    const localURLPage = this.reqresURL + `=${page}`;
    return this.http.get<any>(localURLPage, {headers});
  };
  
}
