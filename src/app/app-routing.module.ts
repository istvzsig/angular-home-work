import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoStreamComponent } from './components/photo-stream/photo-stream-component';
import { FavoritePhotosComponent } from './components/favorite-photos/favorite-photos.component';
import { PhotoPageComponent } from './components/photo-page/photo-page.component';

export const routes: Routes = [
  { path: '', component: PhotoStreamComponent, pathMatch: 'full' },
  { path: 'favorites', component: FavoritePhotosComponent, pathMatch: 'full' },
  { path: 'photos/:id', component: PhotoPageComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
