import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [category, setCategory] = useState("Food");
  const [text, setText] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const newTask = { text, category };
    console.log(newTask);
    onTaskFormSubmit(newTask);
  }
  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.slice(1).map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
