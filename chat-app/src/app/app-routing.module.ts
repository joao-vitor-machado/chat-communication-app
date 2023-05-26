import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path: "home", component: WelcomePageComponent},
  {path: "chat-page", component: ChatPageComponent, children: [
    {path: "conversation", component: ChatComponent, outlet: "chat-component"},
  ]},
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
