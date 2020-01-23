import { Component, OnInit } from '@angular/core';
import {ReleasesService} from '../../shared/services/releases/releases.service';
import {Albums, Item, ReleasesDTO} from '../../shared/domain/releasesDTO';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ArtistComponent} from '../artist/artist.component';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  public releases: ReleasesDTO;

  constructor(private releasesService: ReleasesService) { }

  ngOnInit() {
    this.getReleases();
  }

  getReleases() {
    this.releasesService.getReleases().subscribe(response => {
      this.releases =  response;
    });
  }
}
