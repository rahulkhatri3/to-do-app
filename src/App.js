import React, { useState } from "react";
import "./styles.css";

function TodoList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodoItem = () => {
    if (input.trim() === "") return;

    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  return (
    <div className="to-do">
      <h1>To Do</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="add" onClick={() => addTodoItem()}>
        Add
      </button>
      <div className="unorder-list">
        <ul>
          {todoList.map((t) => (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleCompleted(t.id)}
              />
              <span className={t.completed ? "StrikeThrough" : ""}>
                {t.text}
              </span>
              <button className="delete" onClick={() => deleteTodo(t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;
