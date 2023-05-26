import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { NavigationButtonComponent } from './buttons/navigation-button/navigation-button.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ChatsColumnComponent } from './components/chats-column/chats-column.component';
import { ChatsColumnOptionComponent } from './components/chats-column-option/chats-column-option.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageSenderService } from './services/message-sender.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    NavigationButtonComponent,
    WelcomePageComponent,
    ChatsColumnComponent,
    ChatsColumnOptionComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MessageSenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
