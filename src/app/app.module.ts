import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PhotoService } from './services/photo.service';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfinitePhotoStreamComponent } from './components/infinite-photo-stream/infinite-photo-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    InfinitePhotoStreamComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
  ],
  providers: [HttpClient, PhotoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
