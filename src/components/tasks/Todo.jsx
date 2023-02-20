import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { NavBar, Footer } from "./partials/Partials";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (input) => {
    setTasks((prevTask) => {
      return [
        ...prevTask,
        {
          id: prevTask.length + 1,
          task: input,
          isCompleted: false,
        },
      ];
    });
  };

  const handleCheckbox = (id, isCompleted) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) return { ...task, isCompleted: isCompleted };
        return task;
      })
    );
  };

  const handleDeleteCompleted = (id) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleClear = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isCompleted));
  };

  return (
    <div>
      <NavBar />

      <TodoItem
        tasks={tasks}
        handleCheckbox={handleCheckbox}
        handleDeleteCompleted={handleDeleteCompleted}
        handleClear={handleClear}
        addTask={addTask}
      />

      <Footer />
    </div>
  );
}
