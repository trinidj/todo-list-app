export function filterTasksByPriority(tasks, filter) {
  if (filter === 'all') {
    return tasks;
  }

  return tasks.filter(task  => task.priority === filter);
}