import React, { useState } from "react";
import clsx from "clsx";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useTodoLayerValue } from "../context/TodoContext";

function Todo({ todo }) {
  const [{}, dispatch] = useTodoLayerValue();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);

  function removeTodo(todoId) {
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
  }

  function completeTodo(todoId) {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,
    });
  }

  function updateTodo({ todoId, newValue }) {
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        todoId,
        newValue,
      },
    });
  }

  const todoStyled = clsx({
    "todo-row": true,
    completed: todo.isCompleted,
  });

  return (
    <div className={todoStyled}>
      <div onClick={() => editable ? '' : completeTodo(todo.id)}>
        {editable ? (
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="todo-input-edit"
          />
        ) : (
          todo.content
        )}
      </div>

      <div className="todo-icons">
        <GrFormClose
          className="todo-icon"
          onClick={() => removeTodo(todo.id)}
        />
        {editable ? (
          <GrFormCheckmark
            className="todo-icon"
            onClick={() => {
              updateTodo({
                todoId: todo.id,
                newValue: content,
              });

              setContent("");
              setEditable(false);
            }}
          />
        ) : (
          <GrFormEdit className="todo-icon" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
