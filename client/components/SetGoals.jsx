import React from 'react'

import { useDispatch } from 'react-redux'

import { thunkDelGoal } from '../actions/goals'

function SetGoals ({ details, todo }) {
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(thunkDelGoal(todo.id))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {details}{'  '}
        <button onClick={deleteHandler} className="del-btn">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  )
}

export default SetGoals
