/**
 * @param { Array } tasks
 * @param { HTMLElement } todoList
 */

export function renderTasks(tasks, todoList) {
  todoList.innerHTML = '';
  if (tasks.length === 0) {
    const div = document.createElement('div');
    div.className = 'no-tasks';
    
    div.innerHTML = `
      <p class="empty-state-title">No Tasks Yet</p>
      <p class="empty-state-subtitle">Add your first task to get started</p>
    `
  
    todoList.appendChild(div);
    return;
  };

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('task-element');
    taskElement.setAttribute('data-task', JSON.stringify(task));
    taskElement.setAttribute('data-index', index);
    todoList.appendChild(taskElement);
  });
}