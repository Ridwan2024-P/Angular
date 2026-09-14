import { Component, computed, signal,Input,input, Output,EventEmitter } from '@angular/core';
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
  @Input ({required:true}) id!:string;
   @Input({required: true}) avatar!: string;
   @Input({required : true}) name!: string;
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<String>();


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
    this.select.emit(this.id);
  }

}
