import { Component } from '@angular/core';

@Component({
  selector: 'TopNavigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass']
})
export class TopNavigationComponent {
  public navigationItems: string[] = ["Get Random", "Favorites"];
}
