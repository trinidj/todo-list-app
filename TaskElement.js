
class TaskElement extends HTMLElement {
  connectedCallback() {
    const taskData = JSON.parse(this.getAttribute('data-task') || '{}');

    this.innerHTML = /*html*/`
      <li class="task-item">
        <div class="task-content">
          <button class="task-checkbox"></button>

          <div class="task-info">
            <h1 class="task-title">${taskData.title || ''}</h1>
              <p class="task-priority priority-${taskData.priority}">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag-icon lucide-flag"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/></svg>
                <span>${taskData.priority}</span>
              </p>
          </div>
        </div>
        <div class="task-actions">
          <button class="delete-task">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </li>
    `;
  }
}
customElements.define("task-element", TaskElement);