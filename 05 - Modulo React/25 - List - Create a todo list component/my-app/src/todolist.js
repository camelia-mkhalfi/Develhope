import React, { useState } from "react";

export function Todo() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
  ]);

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

  const handleChange = (event) => {
    const newValue = event.target.value;
    setNewTask(newValue);
  };

  return (
    <div>
      <h2>ToDo</h2>
      <input value={newTask} onChange={handleChange} />
      <button onClick={addTask}> Add task </button>
      <br />
      <br />
      {toDo && toDo.length ? (
        <ul>
          {toDo.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      ) : (
        "Nessun compito inserito"
      )}
    </div>
  );
}

