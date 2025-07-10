/**
 * @param { Array } tasks
 * @param { HTMLElement } todoList
 */

export function renderTasks(tasks, todoList) {
  todoList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = task;
    todoList.appendChild(li);
  });
}