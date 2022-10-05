import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteHandler }) {
  function deleteObj(obj) {
    deleteHandler(obj);
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, i) => (
        <Task key={i} task={task} category={task.category} text={task.text} deleteHandler={deleteObj} />
      ))}
    </div>
  );
}

export default TaskList;
