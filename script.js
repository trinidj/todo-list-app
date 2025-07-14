import { renderTasks } from './helpers/renderTasks.js';
import './TaskElement.js';

// Dialog 
const dialogButtons = {
  add: document.getElementById('add-task'),
  cancel: document.getElementById('cancel-task'),
  submit: document.getElementById('submit-task'),
};

dialogButtons.add.addEventListener('click', () => dialog.showModal());
dialogButtons.cancel.addEventListener('click', () => dialog.close());

const dialog = document.getElementById('modern-dialog');
const todoList = document.getElementById('todo-list');
const taskTitle = document.getElementById('task-title');
         
let tasksArray = JSON.parse(localStorage.getItem('todo-tasks')) || [];

renderTasks(tasksArray, todoList);

dialogButtons.submit.addEventListener('click', () => {
  try {
    // collect task info from form to create a new task object
    const newTask = {
      title: taskTitle.value, 
      priority: document.getElementById('task-priority').value,                                   
    };

    tasksArray.push(newTask); // adds the new task to an array
    localStorage.setItem('todo-tasks', JSON.stringify(tasksArray))
    renderTasks(tasksArray, todoList); // updates the display

    console.log(newTask);
    taskTitle.value = '';
    dialog.close();
  } catch (error) {
    console.error('Failed to add task:', error);
    alert('Something went wrong while adding your task. Please try again.');
  }
});

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
    const button = e.target;
    const taskItem = button.closest('.task-item');
    const taskText = taskItem.querySelector('.task-title');

    taskItem.classList.toggle('completed');
    button.classList.toggle('completed');
    taskText.classList.toggle('completed');
    button.textContent = button.classList.contains('completed') ? `` : '';
  }
});




