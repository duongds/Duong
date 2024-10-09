import common from './common'
import user from './user'
import { combineReducers } from 'redux'

const rootReducer: any = combineReducers({
  common,
  user,
})

export default rootReducer
