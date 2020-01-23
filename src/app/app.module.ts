import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import {MatButtonModule, MatCardModule, MatChipsModule, MatTableModule} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import {AuthService} from './shared/services/auth/auth.service';
import {InterceptorService} from './shared/services/interceptor/interceptor.service';
import {ReleasesService} from './shared/services/releases/releases.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArtistComponent } from './pages/artist/artist.component';
import {ArtistService} from './shared/services/artist/artist.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReleasesComponent,
    HomeComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    ScrollingModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    ReleasesService,
    ArtistService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
