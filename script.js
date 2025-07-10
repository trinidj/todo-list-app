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
let tasks = JSON.parse(localStorage.getItem('todo-tasks')) || [];
const taskInput = document.querySelector('input');
const todoList = document.getElementById('todo-list');

tasks.forEach(task => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.textContent = task;
  todoList.appendChild(li);
});

dialogButtons.submit.addEventListener('click', () => {
  try {
    tasks.push(taskInput.value);
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));

    console.log(tasks);

    todoList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'list-item';
      li.textContent = task;
      todoList.appendChild(li);
    });

    taskInput.value = '';
    dialog.close();
  } catch (error) {
    console.error('Failed to add task:', error);
    alert('Something went wrong while adding your task. Please try again.');
  }
});