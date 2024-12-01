import { Routes } from "@angular/router";
import {HomeComponent} from "./core/home/home.component";

export const routes: Routes = [
    {
        path: 'home',component: HomeComponent
    },
    {
        path: 'mail',loadChildren:
            () =>
                import('./routes/mail/mail.module').then(m => m.MailModule)
    }
];
