import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats-column',
  templateUrl: './chats-column.component.html',
  styleUrls: ['./chats-column.component.scss']
})
export class ChatsColumnComponent implements OnInit {

  list : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
  constructor() { }

  ngOnInit(): void {
  }

}
