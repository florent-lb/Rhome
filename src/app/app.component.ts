import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MainMenuComponent} from "./core/main-menu/main-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainMenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
