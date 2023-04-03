import { combineReducers } from 'redux'
import albumReducer from './album'

// import stuff from './stuff'

export default combineReducers({
  album: albumReducer,
})
