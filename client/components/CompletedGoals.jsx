import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { thunkGetAllGoals } from '../actions/goals'

const CompletedGoals = ({ todos, setTodos, filteredGoals }) => {
  const { isAuthenticated } = useAuth0()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(thunkGetAllGoals())
  }, [])

  const newGoals = useSelector((globalState) => globalState.newGoals)
  const results = useSelector((globalState) => globalState.goals)

  const filteredResults = results.filter((goal) => {
    const id = goal.id

    return newGoals.includes(id)
  })

  return (
    isAuthenticated && (
      <>
        <div className="mygoals-card">
          <h3>
            <u>Completed Goals</u>
          </h3>

          {/* To display goals */}
          <div>
            <ul>
              {results.map((goals) => {
                if (goals.completed == 1) {
                  return <li key={goals.details}>{goals.details}</li>
                }
              })}
            </ul>
          </div>
        </div>
      </>
    )
  )
}

export default CompletedGoals
