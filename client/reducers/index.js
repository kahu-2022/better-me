import { combineReducers } from 'redux'

import goals from './goals'
import newGoals from './newGoals'

export default combineReducers({
  goals,
  newGoals
})
