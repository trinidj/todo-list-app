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
      const task = this.tasks[index];

      task.completed = !task.completed;

      this.tasks.splice(index, 1);

      if (task.completed) {
        this.tasks.push(task);
      }

      this.saveToStorage();
      return task;
    }
  }

  saveToStorage = () => {
    localStorage.setItem('todo-tasks', JSON.stringify(this.tasks));
  }
}