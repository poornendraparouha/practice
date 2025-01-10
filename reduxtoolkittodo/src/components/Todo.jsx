import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {todos.map((todo) => (
        <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
      </li>
    ))}
  </>
)
}

export default Todo