import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ReleasesComponent} from './pages/releases/releases.component';
import {HomeComponent} from './pages/home/home.component';
import {ArtistComponent} from './pages/artist/artist.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'lanzamientos',
        component: ReleasesComponent
      },
      {
        path: 'artista/:id',
        component: ArtistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
