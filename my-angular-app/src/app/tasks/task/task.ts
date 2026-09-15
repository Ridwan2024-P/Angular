import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { taskModal } from './task.modal';
import { DatePipe } from '@angular/common';


// interface taskModal {
//   id:string,
//   userId:string,
//   title:string,
//   summary:string,
//   dueDate:string
// }


// 
@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({required:true}) task!:taskModal;
  @Output() complete = new EventEmitter<string>();
  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}