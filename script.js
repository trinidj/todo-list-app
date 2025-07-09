const addTask = document.getElementById('add-task');
const cancelTask = document.getElementById('cancel-task');

addTask.addEventListener('click', () => {
  document.getElementById('modern-dialog').showModal();
});

cancelTask.addEventListener('click', () => {
  document.getElementById('modern-dialog').close();
});