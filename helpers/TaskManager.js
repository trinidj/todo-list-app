export class TaskManager {
  constructor() {
    this.tasks = this.loadTasks();
    this.observers = []; // When a task is completed, other functions will be notified
  }

  loadTasks = () => {
    return JSON.parse(localStorage.getItem('todo-tasks')) || [];
  }

  saveTasks = () => {
    localStorage.setItem('todo-tasks', JSON.stringify(this.tasks));
    this.notifyObservers();
  }

  addTask = (taskData) => {
    const newTask = {
      title: taskData.title,
      priority: taskData.priority,
      completed: false,
    };

    this.tasks.push(newTask);
    this.saveTasks();

    return newTask;
  }

  deleteTask = (index) => {
    this.tasks.splice(index, 1);
    this.saveTasks;
  }


}