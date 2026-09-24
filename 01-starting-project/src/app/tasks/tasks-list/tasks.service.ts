import { Injectable, signal } from "@angular/core";
import { Task } from "../task.model";

@Injectable({
    providedIn:'root'
})
export class TasksService{
    tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly();

    addTask(taskdata:{title:string;description:string}){
        const newTask: Task = {
            ...taskdata,
            id:Math.random().toString(),
            status : 'OPEN'
        }
        this.tasks.update((oldtask)=> [...oldtask, newTask ])
    }
}