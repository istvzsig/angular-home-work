import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'TopNavigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass']
})
export class TopNavigationComponent {
  public navigationItems: string[] = ['Get Random', 'Favorites'];
  public routes = ['', 'favorites'];

  public setCurrentPath(pathName: string): any {
    return pathName;
  }
}
