import React from 'react'
import { useDispatch } from 'react-redux'
import { thunkDelGoal } from '../actions/goals'

function SetGoals ({ details, setTodos, todo, todos }) {
  console.log('delete', details)

  const dispatch = useDispatch()

  const deleteHandler = () => {
    console.log(todo.id)
    //   // setTodos(todos.filter((elem) => elem.details !== todo.details));
    dispatch(thunkDelGoal(todo.id))
  }

  // this part is for my Goals and to change state to complete
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
