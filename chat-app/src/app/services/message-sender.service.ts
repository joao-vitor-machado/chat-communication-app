import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageSenderService {

  private messages = [
    {from: 'me', message: 'oi. bom dia'},
    {from: 'other', message: 'salve, dog'}
  ];

  constructor() { }

  getMessages() : Array<any>{
    let copiedMessages : Array<any> = [];
    this.messages.forEach((message) => copiedMessages.push(message))

    return copiedMessages;
  }
}
