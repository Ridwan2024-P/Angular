import { Component, computed, signal,Input,input, Output,EventEmitter, output, } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { StringifyOptions } from 'querystring';
import { Users } from './users.model';

//  type Users{
//   id : string;
//   name :string;
//   avatar :string;
//  }

// interface  Users{
//     id : string;
//   name :string;
//   avatar :string;
// }


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone : true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input ({required:true})  user!:Users
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<String>();

  // Output function

  // select = output<string>();


  // selectedUser = signal(DUMMY_USERS [randomIndex])
  // imagePath = computed(()=>this.selectedUser().avatar)
  // // get imagePath(){
  // //   return this.selectedUser.avatar

  get imagePath(){
    return this.user.avatar;
  }
  
  
  onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set( DUMMY_USERS [randomIndex])
    // //  this.selectedUser = DUMMY_USERS [randomIndex]
    this.select.emit(this.user.id);
  }

}
