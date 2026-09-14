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
  title : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
 {
  id : 't2',
  userId:'u2',
  title : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
 {
  id : 't3',
  userId:'u3',
  title : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
  {
  id : 't4',
  userId:'u4',
  title : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
  {
  id : 't5',
  userId:'u5',
  title : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
  {
  id : 't6',
  userId:'u6',
  title : 'Master Angular',
  summary : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repellendus corrupti vel natus excepturi dolore, vitae quis molestiae eaque placeat.',
  dueDate : '2026-12-12'

 },
]
get selectedUserTasks(){
  return this.tasks.filter((task)=> task.userId === this.userId )
}

}
