import { Component, OnInit } from '@angular/core';
import {ArtistService} from '../../shared/services/artist/artist.service';
import {Router} from '@angular/router';
import {ArtistDTO} from '../../shared/domain/artistDTO';
import {AlbumsDTO, Item} from '../../shared/domain/albumsDTO';
import {Observable} from 'rxjs';
import {TrackDTO} from '../../shared/domain/tackDTO';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  private artistDTO: ArtistDTO;
  private almbumDTO: AlbumsDTO;
  private displayedColumns: string[] = ['foto', 'album', 'cancion'];

  constructor(private artistService: ArtistService, private router: Router) { }

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    const artistId = this.router.url.split('/')[2];
    this.artistService.getArtist(artistId).subscribe(response => {
      this.artistDTO = response;
      this.getAlbums(this.artistDTO.id);
    });
  }

  getAlbums(artistId) {
    this.artistService.getalbums(artistId).subscribe(response => {
      const albums: Array<Item> = new Array<Item>();
      for (const album of response.items) {
        this.getTrack(album.id).subscribe(res => {
          album.album_group = res.items[0].name;
        });
        albums.push(album);
      }
      response.items = albums;
      this.almbumDTO = response;
    });
  }

  getTrack(trackId): Observable<TrackDTO> {
    return this.artistService.getTrack(trackId);
  }
}
