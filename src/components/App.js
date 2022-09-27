import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState([...TASKS]);
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? [...tasks] : tasks.filter((task) => task.category === selected);
  function selectedHandler(category) {
    setSelected(category);
  }
  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }
  function deleteHandler(obj) {
    setTasks(tasks.filter((task) => task !== obj));
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} selectedHandler={selectedHandler} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filtered} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
