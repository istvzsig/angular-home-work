import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo/photo.service';

@Component({
  selector: 'TopNavigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass']
})
export class TopNavigationComponent {
  public navigationItems: string[] = ['Get Random', 'Favorites'];
  public routes: string[] = ['', 'favorites'];

  constructor(private router: Router) {}

  public goToPath(path: string): void {
    this.router.navigate(["/"+path]);
  }
}
