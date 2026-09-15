import { Component, Output,EventEmitter, signal  } from '@angular/core';
import { App } from '../../app';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { NewTaskData } from '../task/task.modal';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
   @Output() cancel = new EventEmitter<void>()
   @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary='';
  enteredDate ='';
   onCanceling(){
     this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate

    })
  }
}
