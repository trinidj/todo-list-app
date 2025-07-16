import { renderTasks } from './helpers/renderTasks.js';
import { DialogManager } from './helpers/DialogManager.js';
import { TaskManager } from './helpers/TaskManager.js';
import './TaskElement.js';

const todoList = document.getElementById('todo-list');
const taskManager = new TaskManager();

function updateDisplay() {
  renderTasks(taskManager.getAllTasks(), todoList);
}

const dialogHandler = new DialogManager(taskManager, updateDisplay);
const taskEvents = new TaskEvents(taskManager, todoList, updateDisplay);

updateDisplay();

// Event Delegation for delete children of the todo list
todoList.addEventListener('click', e => {
  if (e.target.classList.contains('delete-task') || e.target.closest('.delete-task')) {
    const taskElement = e.target.closest('[data-index]');
    const taskIndex = parseInt(taskElement.getAttribute('data-index'));
        
    tasksArray.splice(taskIndex, 1);
    
    localStorage.setItem('todo-tasks', JSON.stringify(tasksArray));
    
    renderTasks(tasksArray, todoList);
  }
});

// Event Delegation for Checkbox children of todo list
todoList.addEventListener('click', e => {
  if (e.target.classList.contains('task-checkbox') || e.target.closest('.task-checkbox')) {
    const button = e.target.closest('.task-checkbox') || e.target;
    const taskItem = button.closest('.task-item');
    const taskText = taskItem.querySelector('.task-title');
    const checkmkIcon = taskItem.querySelector('.checkmk-icon');

    checkmkIcon.classList.toggle('completed');
    taskItem.classList.toggle('completed');
    button.classList.toggle('completed');
    taskText.classList.toggle('completed');
    
    taskItem.completed = !taskItem.completed ? true : false
  }
});




