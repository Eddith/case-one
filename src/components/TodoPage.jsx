import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import { useTodoLayerValue } from "../context/TodoContext";

function TodoPage({ names }) {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");
  const [searchs, setSearchs] = useState(todos);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 41542315),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent(" ");
  }

  function filterNames(e) {
    const search = e.target.value.toLowerCase();
    const filteredNames = todos.filter((value) =>
      value.content.toLowerCase().includes(search)
    );
    setSearchs(filteredNames);
  }

  return (
    <>
      <h2 className="head-text">Yapılacaklar Listesi {names}</h2>
      <form className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(e) => filterNames(e)}
        />
        <button className="todo-button">Ara</button>
      </form>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          ref={inputRef}
        />
        <button className="todo-button">Ekle</button>
      </form>

      {/* TodoList */}

      <TodoList todos={todos} searchs={searchs} />
    </>
  );
}

export default TodoPage;
