/**
 * @param { Array } tasks
 * @param { HTMLElement } todoList
 */

export function renderTasks(tasks, todoList) {
  todoList.innerHTML = '';
  if (tasks.length === 0) {
    const div = document.createElement('div');
    div.className = 'no-tasks';
    div.textContent = 'No Tasks';
    todoList.appendChild(div);
    return;
  };

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = task.title;
    todoList.appendChild(li);
  });
}