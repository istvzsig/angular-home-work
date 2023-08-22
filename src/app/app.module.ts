import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


import { PhotoService } from 'src/app/services/photo/photo.service';
import { InfiniteScrollService } from './services/infinite-scroll/infinite-scroll.service';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FavoritePhotosComponent } from './components/favorite-photos/favorite-photos.component';
import { PhotoStreamComponent } from './components/photo-stream/photo-stream-component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    PhotoCardComponent,
    PhotoStreamComponent,
    FavoritePhotosComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HttpClient, PhotoService, InfiniteScrollService],
  bootstrap: [AppComponent],
})
export class AppModule { }
