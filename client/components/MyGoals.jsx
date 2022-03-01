import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SetGoals from './SetGoals'

import { useAuth0 } from '@auth0/auth0-react'
import { thunkGetAllGoals } from '../actions/goals'

const MyGoals = ({ todos, setTodos, filteredGoals }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(thunkGetAllGoals())
  }, [])

  const { isAuthenticated } = useAuth0()
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
            <u>My Goals</u>
          </h3>

          {/* To display goals */}
          <div>
            <ul>
              {results.map((goals) => {
                // Comment: consider using a terniary operator here 
                // Something like: <li>{goals.completed === 0 ? goals.details : <del>goals.details</del>}</li>
                // I did not know del was an html tag! Another way to approach this (perhaps more common?)
                //   would be to use different classNames to style completed vs. incomplete
                if (goals.completed == 0) {
                  return <li>{goals.details}</li>
                } else {
                  return (
                    <li>
                      <del>{goals.details}</del>
                    </li>
                  )
                }
              })}
            </ul>
            {/* Remove unused code... */}
            {/* <ul>
              {results.map((goals) => (
                <li>
                  {goals.details} {goals.completed}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </>
    )
  )
}

export default MyGoals
