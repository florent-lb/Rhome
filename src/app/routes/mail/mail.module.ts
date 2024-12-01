import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {MailComponent} from "./mail.component";

export const MAIL_ROUTES: Routes = [
  {
    path: '**', component: MailComponent
  }
];

@NgModule({
  declarations: [],
  providers:[],
  imports: [
    CommonModule,
    RouterModule.forChild(MAIL_ROUTES)
  ]
})
export class MailModule { }

