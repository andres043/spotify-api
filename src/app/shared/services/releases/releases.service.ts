import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReleasesDTO} from '../../domain/releasesDTO';
import {AppSettings} from '../../constants/appSettings';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  constructor(private http: HttpClient) { }

  getReleases(): Observable<ReleasesDTO> {
    return this.http.get<ReleasesDTO>(AppSettings.GET_NEW_RELEASES);
  }
}
