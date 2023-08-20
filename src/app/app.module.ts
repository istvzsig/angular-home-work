import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { PhotoService } from 'src/app/services/photo-service/photo.service';
import { InfiniteScrollService } from './services/infinite-scroll/infinite-scroll.service';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfinitePhotoStreamComponent } from './components/infinite-photo-stream/infinite-photo-stream.component';
import { FavoritePhotosComponent } from './components/favorite-photos/favorite-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    InfinitePhotoStreamComponent,
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
