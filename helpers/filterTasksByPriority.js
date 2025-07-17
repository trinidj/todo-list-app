export function filterTasksByPriority(tasks, filter) {
  return tasks.filter(task  => task.priority === filter);
}