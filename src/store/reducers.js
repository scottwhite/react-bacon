import { combineReducers } from 'redux';
import locations from '../containers/locations/reducers';
import weather from '../containers/weather/reducers';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  locations,
  weather,
  routing: routerReducer
})

export default rootReducer
