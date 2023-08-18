import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfinitePhotoStreamComponent } from './components/infinite-photo-stream/infinite-photo-stream.component';
import { FavoritePhotosComponent } from './components/favorite-photos/favorite-photos.component';

const routes: Routes = [
  {
    path: '',
    component: InfinitePhotoStreamComponent
  },
  {
    path: 'favorites',
    component: FavoritePhotosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
