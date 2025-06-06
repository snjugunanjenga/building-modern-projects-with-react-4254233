export default funtion TodoListItem({ todo, onCompletedClicked, onDeleteClicked }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <button onClick={() => onCompletedClicked(todo.id)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDeleteClicked(todo.id)}>Delete</button>
      <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
      <p>Created at: {new Date(todo.createdAt).toLocaleString()}</p>
      <p>Updated at: {new Date(todo.updatedAt).toLocaleString()}</p>
      <p>Due date: {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'No due date'}</p>
      <p>Priority: {todo.priority}</p>
      <p>Tags: {todo.tags.length > 0 ? todo.tags.join(', ') : 'No tags'}</p>
      <p>Subtasks: {todo.subtasks.length > 0 ? todo.subtasks.join(', ') : 'No subtasks'}</p>
      <p>Notes: {todo.notes ? todo.notes : 'No notes'}</p>
      <p>Attachments: {todo.attachments.length > 0 ? todo.attachments.join(', ') : 'No attachments'}</p>
      
    </div>