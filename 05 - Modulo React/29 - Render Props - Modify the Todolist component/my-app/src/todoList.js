export default function TodoList(props) {
    const { tasks, deleteTask } = props;
  
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  