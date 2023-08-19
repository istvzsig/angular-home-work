import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfinitePhotoStreamComponent } from './components/infinite-photo-stream/infinite-photo-stream.component';
import { FavoritePhotosComponent } from './components/favorite-photos/favorite-photos.component';

export const routes: Routes = [
  { path: '', component: InfinitePhotoStreamComponent, pathMatch: 'full' },
  { path: 'favorites', component: FavoritePhotosComponent, pathMatch: 'full' },
  { path: 'photos', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
