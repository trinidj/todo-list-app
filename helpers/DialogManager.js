export class DialogManager {
  constructor(taskManager, onTaskAdded) {
    this.taskManager = taskManager;
    this.onTaskAdded = onTaskAdded;

    // Dialog Elements
    this.dialog = document.getElementById('modern-dialog');
    this.taskTitle = document.getElementById('task-title');
    this.taskPriority = document.getElementById('task-priority');

    // Dialog Actions
    this.addButton = document.getElementById('add-task');
    this.cancelButton = document.getElementById('cancel-task');
    this.submitButton = document.getElementById('submit-task');

    this.setupEventListeners();
  }

  setupEventListeners = () => {
    this.addButton.addEventListener('click', () => this.openDialog());
    this.cancelButton.addEventListener('click', () => this.closeDialog());
    this.submitButton.addEventListener('click', () => this.handleSubmit());
  }

  openDialog = () => {
    this.dialog.showModal();
  }

  closeDialog = () => {
    this.dialog.close();
  }

  clearForm = () => {
    this.taskTitle.value = '';
    this.taskPriority.value = 'low';
  }

  handleSubmit = () => {
    try {
      const title = this.taskTitle.value.trim();
      const priority = this.taskPriority.value;

      const newTask = this.taskManager.addTask(title, priority);

      this.onTaskAdded();
      console.log('Added Task:', newTask);
      this.closeDialog();
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  } 
}