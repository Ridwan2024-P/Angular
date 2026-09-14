import { Component,Input } from '@angular/core';
import { Task } from './task/task';


@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({required :true}) userId!:string;
 @Input({required:true}) name!:string;
 tasks= [{
  id : 't1',
  userId:'u1',
  tittle : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
 {
  id : 't2',
  userId:'u2',
  tittle : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
 {
  id : 't3',
  userId:'u3',
  tittle : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
]
get selectedUserTasks(){
  return this.tasks.filter((task)=> task.userId === this.userId )
}

}
