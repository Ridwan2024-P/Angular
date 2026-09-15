import { Component, Input, inject } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.modal';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  private taskService = inject(TaskService);

  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelingTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.taskService.addTask(this.userId, taskData);

    this.isAddingTask = false;
  }
}