import { Component } from '@angular/core';
import {MainMenuItemComponent} from "./main-menu-item/main-menu-item.component";
import {RouterLinkActive} from "@angular/router";

@Component({
  selector: 'rha-main-menu',
  imports: [
    MainMenuItemComponent
  ],
  templateUrl: './main-menu.component.html',
  standalone: true,
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
