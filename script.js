const dialogButtons = {
  add: document.getElementById('add-task'),
  cancel: document.getElementById('cancel-task'),
  submit: document.getElementById('submit-task'),
};

const dialog = document.getElementById('modern-dialog');
const todoList = document.getElementById('todo-list');
const taskInput = document.querySelectorAll('.task-input');

let tasks = [];

dialogButtons.add.addEventListener('click', () => document.getElementById('modern-dialog').showModal());
dialogButtons.cancel.addEventListener('click', () => document.getElementById('modern-dialog').close());
