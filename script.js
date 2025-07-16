import { DialogManager } from './helpers/DialogManager.js';
import { TaskManager } from './helpers/TaskManager.js';
import { renderTasks } from './helpers/renderTasks.js';
import './TaskElement.js';

const todoList = document.getElementById('todo-list');
const taskManager = new TaskManager();

function updateDisplay() {
  renderTasks(taskManager.getAllTasks(), todoList);
}

const dialogHandler = new DialogManager(taskManager, updateDisplay);

updateDisplay();

// Event Delegation for children of the todo list
todoList.addEventListener('click', e => {
  // Handle Delete
  if (e.target.classList.contains('delete-task') || e.target.closest('.delete-task')) {
    const taskElement = e.target.closest('[data-index]');
    const taskIndex = parseInt(taskElement.getAttribute('data-index'));

    taskManager.deleteTask(taskIndex);
    updateDisplay();
  }

  // Handle Toggle
  if (e.target.classList.contains('task-checkbox') || e.target.closest('.task-checkbox')) {
    const button = e.target.closest('.task-checkbox') || e.target;
    const taskElement = button.closest('[data-index]');
    const taskIndex = parseInt(taskElement.getAttribute('data-index'));

    const updatedTask = taskManager.toggleTask(taskIndex);

    // Update the UI elements
    const taskItem = button.closest('.task-item');
    const taskText = taskItem.querySelector('.task-title');
    const checkmkIcon = taskItem.querySelector('.checkmk-icon');

    // CSS Toggling
    const isCompleted = updatedTask.completed;
    checkmkIcon.classList.toggle('completed', isCompleted);
    taskItem.classList.toggle('completed', isCompleted);
    button.classList.toggle('completed', isCompleted);
    taskText.classList.toggle('completed', isCompleted);
  }
});

updateDisplay();




