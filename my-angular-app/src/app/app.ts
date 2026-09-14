import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users =  DUMMY_USERS;
  selectedUserId ?: string;

  get selectedUser(){
    return this.users.find((a)=>a.id === this.selectedUserId)!;

  }
  onSelectedUser(id:string){
   this.selectedUserId = id ;
  }
  protected readonly title = signal('my-angular-app');
}
