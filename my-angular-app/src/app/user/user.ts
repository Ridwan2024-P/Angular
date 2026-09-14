import { Component, computed, signal,Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { StringifyOptions } from 'querystring';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone : true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
   @Input() avatar!: string;
   @Input() name!: string;


  // selectedUser = signal(DUMMY_USERS [randomIndex])
  // imagePath = computed(()=>this.selectedUser().avatar)
  // // get imagePath(){
  // //   return this.selectedUser.avatar

  get imagePath(){
    return this.avatar;
  }
  
  
  onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set( DUMMY_USERS [randomIndex])
    // //  this.selectedUser = DUMMY_USERS [randomIndex]
  }

}
