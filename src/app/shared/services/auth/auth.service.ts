import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenDTO} from '../../domain/tokenDTO';
import {AppSettings} from '../../constants/appSettings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  getToken(): Observable<TokenDTO> {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: AppSettings.AUTH_BASIC
    });
    return this.http.post<TokenDTO>(AppSettings.API_TOKEN, 'grant_type=client_credentials',
      {headers: this.headers});
  }
}
