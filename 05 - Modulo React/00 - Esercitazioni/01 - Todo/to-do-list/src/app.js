import React, { useState } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false, showDoneButton: true },
    { id: 2, title: "Task 2", status: false, showDoneButton: true },
  ]);

  const [newTask, setNewTask] = useState("");

  const [showUpdateButton, setShowUpdateButton] = useState(false);

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
      setShowUpdateButton(false);
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setNewTask(newValue);
  };

  const doneTask = (id) => {
    let newTasks = toDo.filter((task) => {
      if (task.id === id) {
        task.status = "done";
        task.showDoneButton = false;
      }
    });
    setNewTask(newTasks);
  };

  const modifyTask = (task) => {
    deleteTask(task.id);
    setNewTask(task.title);
    setShowUpdateButton(true);
  }

  return (
    <div className="container App">
      <br />
      <br />
      <h2>Esercitazione ToDo</h2>
      <br />
      <br />
      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg" value={newTask} onChange={handleChange}/>
        </div>
        {!showUpdateButton && (
          <div className="col-auto">
            <button className="btn btn-lg btn-primary" onClick={addTask}> Add task </button>
          </div>
        )}
        {showUpdateButton && (
          <div className="col-auto">
            <button className="btn btn-lg btn-warning" onClick={addTask}> Modifica </button>
          </div>
        )}
      </div>
      <br />
      <br />
      {toDo && toDo.length ? "" : "Nessun compito inserito"}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <div className="row">
              <div className="col-8 taskRow">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
              </div>
              {task.showDoneButton && (
                <div className="col-auto">
                  <button className="btn btn-lg btn-success" onClick={() => doneTask(task.id)}> Eseguito </button>
                </div>
              )}
              {task.showDoneButton && (
                <div className="col-auto">
                  <button className="btn btn-lg btn-warning" onClick={() => modifyTask(task)}> Modifica </button>
                </div>
              )}
              <div className="col-auto">
                <button className="btn btn-lg btn-danger" onClick={() => deleteTask(task.id)}> Cancella </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
