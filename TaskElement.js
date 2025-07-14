
class TaskElement extends HTMLElement {
  connectedCallback() {
    const taskData = JSON.parse(this.getAttribute('data-task') || '{}');

    this.innerHTML = `
      <li class="task-item">
        <div class="task-content">
          <button class="task-checkbox"></button>
          <h1 class="task-title">${taskData.title || ''}</h1>
        </div>
        <button class="delete-task">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </li>
    `;
  }
}
customElements.define("task-element", TaskElement);