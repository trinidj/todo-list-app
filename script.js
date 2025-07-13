import { renderTasks } from './helpers/renderTasks.js';

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
          
// Tasks and Local Storage
let tasksArray = [];

renderTasks(tasksArray, todoList);

dialogButtons.submit.addEventListener('click', () => {
  try {
    // collect task info from form to create a new task object
    const newTask = {
      title: taskTitle.value,                                        
    };

    tasksArray.push(newTask); // adds the new task to an array
    renderTasks(tasksArray, todoList); // updates the display

    taskTitle.value = '';
    dialog.close();
  } catch (error) {
    console.error('Failed to add task:', error);
    alert('Something went wrong while adding your task. Please try again.');
  }
});

const tasks = document.querySelectorAll('.list-item');

tasks.forEach(task => {
  task.addEventListener('click', () => {
    console.log(`Task ${task.id} Clicked!`);
  });
});