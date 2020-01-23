import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppSettings} from '../../constants/appSettings';
import {ArtistDTO} from '../../domain/artistDTO';
import {AlbumsDTO} from '../../domain/albumsDTO';
import {TrackDTO} from '../../domain/tackDTO';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtist(artistId): Observable<ArtistDTO> {
    return this.http.get<ArtistDTO>(`${AppSettings.GET_ARTIST}/${artistId}`);
  }

  getalbums(artistId): Observable<AlbumsDTO> {
    return this.http.get<AlbumsDTO>(`${AppSettings.GET_ARTIST}/${artistId}/albums`);
  }

  getTrack(albumId): Observable<TrackDTO> {
    return this.http.get<TrackDTO>(`${AppSettings.GET_TRACK}/${albumId}/tracks`);
  }
}
