import { DialogManager } from './helpers/DialogManager.js';
import { TaskManager } from './helpers/TaskManager.js';
import { renderTasks } from './helpers/renderTasks.js';
import { filterTasksByPriority } from './helpers/filterTasksByPriority.js';
import './Task.js';

const todoList = document.getElementById('todo-list');
const filterTasks = document.getElementById('filter-actions');
const taskManager = new TaskManager();

let filter = 'all';

function updateDisplay() {
  const allTasks = taskManager.getAllTasks();
  const filteredTasks = filterTasksByPriority(allTasks, filter);
  renderTasks(filteredTasks, todoList);
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

  // Handle Checkbox Toggle
  if (e.target.classList.contains('task-checkbox') || e.target.closest('.task-checkbox')) {
    const button = e.target.closest('.task-checkbox') || e.target;
    const taskElement = button.closest('[data-index]');
    const taskIndex = parseInt(taskElement.getAttribute('data-index'));

    const updatedTask = taskManager.toggleTask(taskIndex);

    updateDisplay();

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

// Event Delegation for Filtering Tasks by Priority
filterTasks.addEventListener('click', e => {
  const button = e.target.classList.contains('filter-button') ? e.target : e.target.closest('.filter-button'); 

  // UI Elements
  if (button) {
    button.classList.toggle('active');

    const isActive = button.classList.contains('active');
    button.dataset.state = isActive;

    if (button.classList.contains('filter-low')) {
      filter = 'low';
    } else if (button.classList.contains('filter-medium')) {
      filter = 'medium';
    } else if (button.classList.contains('filter-high')) {
      filter = 'high';
    }

    updateDisplay();
  }
});

updateDisplay();




