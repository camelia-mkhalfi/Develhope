import React, { useState } from "react";
import TodoList from "./todoList";

export function Todo() {
  const initialTasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
  ];
  const [toDo, setToDo] = useState(initialTasks);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        status: false,
        showDoneButton: true,
      };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const reset = () => {
    setToDo(initialTasks);
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setNewTask(newValue);
  };

  return (
    <div>
      <h2>ToDo</h2>
      <input value={newTask} onChange={handleChange} />
      <button onClick={addTask}> Add task </button>
      <button onClick={reset}>Reset</button>

      <br />
      <br />
      {toDo && toDo.length ? (
      <TodoList tasks={toDo} deleteTask={deleteTask} />

      ) : (
        "Nessun compito inserito"
      )}
    </div>
  );
}
