import { renderTasks } from './helpers/renderTasks.js';
import './Task.js';

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
    };

    tasksArray.push(newTask); // adds the new task to an array
    localStorage.setItem('todo-tasks', JSON.stringify(tasksArray))
    renderTasks(tasksArray, todoList); // updates the display

    taskTitle.value = '';
    dialog.close();
  } catch (error) {
    console.error('Failed to add task:', error);
    alert('Something went wrong while adding your task. Please try again.');
  }
});

// Event Delegation for delete buttons
document.getElementById('todo-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-task') || e.target.closest('.delete-task')) {
    console.log('Delete Button Clicked!');
  }
});