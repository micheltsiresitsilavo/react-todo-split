import React, { useState } from "react";

function TodoForm({ addTask }) {
  const [inputTask, setInputTask] = useState("");

  const handleInputTask = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputTask && addTask(inputTask);
    setInputTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={inputTask}
        onChange={handleInputTask}
        placeholder="Ampdiro eto ny asa atao"
        className="InsertInput"
      />

      <button className="BtnAdd" type="submit">
        Add task
      </button>
    </form>
  );
}

export default TodoForm;
