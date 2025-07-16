export class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('todo-tasks')) || [];
  }

  getAllTasks = () => {
    return this.tasks;
  }

  addTask = (title, priority) => {
    const newTask = {
      title: title,
      priority: priority,
      completed: false,
    };

    this.tasks.push(newTask);
    this.saveToStorage();
    return newTask;
  }

  deleteTask = (index) => {
    this.tasks.splice(index, 1);
    this.saveToStorage();
  }
}