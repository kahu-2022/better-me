import React from 'react'
import { useDispatch } from 'react-redux'
import { thunkDelGoal } from '../actions/goals'

function SetGoals ({ details, setTodos, todo, todos }) {
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(thunkDelGoal(todo.id))
  }

  // this will need to be changed to dispatch a updateGoal thunk that uses the update goal action
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.details === todo.details) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    )
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {details}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default SetGoals
