import {Injectable, signal} from '@angular/core';
import {invoke} from "@tauri-apps/api/core";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mails = signal<string[]>([])
  constructor() {

  }


  private loadMails(){
    invoke<string[]>('get_mails')
        .then((mails) => this.mails.set(mails))
  }

}
