import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.modal';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      dueDate: '2026-12-12'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      dueDate: '2026-12-12'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      dueDate: '2026-12-12'
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Master Angular',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      dueDate: '2026-12-12'
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Master Angular',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      dueDate: '2026-12-12'
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Master Angular',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      dueDate: '2026-12-12'
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter(
      (task) => task.userId === this.userId
    );
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== id
    );
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelingTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {

    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });

    this.isAddingTask = false;
  }
}