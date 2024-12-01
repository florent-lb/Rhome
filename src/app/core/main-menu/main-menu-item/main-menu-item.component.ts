import {Component, input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'rha-main-menu-item',
  imports: [
    RouterLink,
    MatIcon
  ],
  standalone: true,
  styleUrl: './main-menu-item.component.css',
  template: `
    <div class="text-white flex justify-center align-middle p-4 cursor-pointer shadow-indigo-500/50 ">
      @if (icon()) {
        <mat-icon class="mr-1">{{icon()}}</mat-icon> 
      }
      <a class="pt-0.5" [routerLink]="route()">{{title()}}</a>
    </div>
  `

})
export class MainMenuItemComponent {

  title = input.required()
  route = input<string>()
  icon = input<string>()

}
