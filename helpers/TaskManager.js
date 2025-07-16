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

  toggleTask = (index) => {
    if (this.tasks[index]) {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.saveToStorage();
      
      return this.tasks[index];
    }
  }

  saveToStorage = () => {
    localStorage.setItem('todo-tasks', JSON.stringify(this.tasks));
  }
}