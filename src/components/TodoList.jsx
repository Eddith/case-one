import React from 'react'
import Todo from './Todo'

function TodoList({ todos, searchs, disable }) {
  return (
    <div className='todo-list'>
      {
        todos && todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
      <p>Search Result</p>
      {
        searchs && searchs.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}

export default TodoList
