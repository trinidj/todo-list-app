// Dialog 
const dialogButtons = {
  add: document.getElementById('add-task'),
  cancel: document.getElementById('cancel-task'),
  submit: document.getElementById('submit-task'),
};

const dialog = document.getElementById('modern-dialog');

dialogButtons.add.addEventListener('click', () => dialog.showModal());
dialogButtons.cancel.addEventListener('click', () => dialog.close());

// Tasks and Local Storage
let tasks = [];

const taskInput = document.querySelector('input');

dialogButtons.submit.addEventListener('click', () => {
  try {
    tasks.push(taskInput.value);
    localStorage.setItem('tasks', tasks);
    
    dialog.close();
  } catch (error) {
    console.error('Failed to add task:', error);
    alert('Something went wrong while adding your task. Please try again.');
  }
});