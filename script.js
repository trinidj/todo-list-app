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
let tasksArray = JSON.parse(localStorage.getItem('todo-tasks')) || [];

renderTasks(tasksArray, todoList);

dialogButtons.submit.addEventListener('click', () => {
  try {
    // collect task data from form
    const newTask = {
      title: taskTitle.value,                                         
    };

    tasksArray.push(newTask);
    localStorage.setItem('todo-tasks', JSON.stringify(tasksArray));

    renderTasks(tasksArray, todoList);

    taskTitle.value = '';
    dialog.close();
  } catch (error) {
    console.error('Failed to add task:', error);
    alert('Something went wrong while adding your task. Please try again.');
  }
});