import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone : true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  selectedUser = signal(DUMMY_USERS [randomIndex])
  imagePath = computed(()=>this.selectedUser().avatar)
  // get imagePath(){
  //   return this.selectedUser.avatar
  // }
  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set( DUMMY_USERS [randomIndex])
    //  this.selectedUser = DUMMY_USERS [randomIndex]
  }
}
