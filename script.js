const dialogButtons = {
  add: document.getElementById('add-task'),
  cancel: document.getElementById('cancel-task'),
};

dialogButtons.add.addEventListener('click', () => document.getElementById('modern-dialog').showModal());
dialogButtons.cancel.addEventListener('click', () => document.getElementById('modern-dialog').close());