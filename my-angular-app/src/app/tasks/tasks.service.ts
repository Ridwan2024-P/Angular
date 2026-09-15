import { NewTaskData } from './task/task.modal';

export class TaskService {

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

  getUserTasks(userId: string) {
    return this.tasks.filter(
      (task) => task.userId === userId
    );
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== id
    );
  }
}