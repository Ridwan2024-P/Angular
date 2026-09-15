import { Component, Output,EventEmitter  } from '@angular/core';
import { App } from '../../app';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
   @Output() cancel = new EventEmitter<void>()

   onCanceling(){
     this.cancel.emit();
  }
}
