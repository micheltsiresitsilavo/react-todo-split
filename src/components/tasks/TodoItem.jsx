import React from "react";

import TodoForm from "./TodoForm";

function TodoItem({
  tasks,
  handleCheckbox,
  handleDeleteCompleted,
  handleClear,
  addTask,
}) {
  const handleCheckboxItem = (id) => (e) => {
    handleCheckbox(id, e.target.value);
  };
  const InputCheckBox = ({ item }) => {
    return (
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={handleCheckboxItem(item.id)}
        style={{ cursor: "pointer" }}
      />
    );
  };
  return (
    <>
      <div className="ListContainer">
        <ul className="List">
          {tasks.map((item) => (
            <li className="List_Item" key={item.id}>
              {item.isCompleted ? (
                <div className="ListeHafa">
                  <div className="Flexa">
                    <InputCheckBox item={item} />
                    <p className="Item LineThrough">{item.task}</p>
                  </div>

                  <div className="Btn" onClick={handleDeleteCompleted(item.id)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                        fill="currentColor"
                      />
                      <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                      <path d="M13 9H15V17H13V9Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="Flexa Suite">
                  <InputCheckBox item={item} />
                  <p className="Item">{item.task}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <TodoForm addTask={addTask} />
        <br />
        <div style={{ marginTop: "20px" }}>
          <button className="BtnClear" onClick={handleClear}>
            Clear completed task
          </button>
        </div>{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "15px 20px",
          color: "#524a4a",
        }}
      >
        <h2>
          {tasks.length <= 1 ? tasks.length + " task" : tasks.length + " tasks"}
        </h2>

        <h2>
          Completed task {tasks.filter((task) => task.isCompleted).length}
        </h2>
      </div>
    </>
  );
}

export default TodoItem;
