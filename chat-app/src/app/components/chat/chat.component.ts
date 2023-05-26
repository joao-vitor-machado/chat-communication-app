import { Component, OnInit } from '@angular/core';
import { MessageSenderService } from 'src/app/services/message-sender.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages: Array<any> = [];

  constructor(private messageService : MessageSenderService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

}
