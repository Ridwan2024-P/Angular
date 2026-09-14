import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users =  DUMMY_USERS
  protected readonly title = signal('my-angular-app');
}
