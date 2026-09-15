import { Component, Output,EventEmitter, signal  } from '@angular/core';
import { App } from '../../app';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
   @Output() cancel = new EventEmitter<void>()
  enteredTitle = signal('');
  enteredSummary= signal('');
  enteredDate = signal('');
   onCanceling(){
     this.cancel.emit();
  }
}
