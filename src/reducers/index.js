import { combineReducers } from 'redux';
import locations from '../components/location.reducers';
import weather from '../components/weather.reducers';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  locations,
  weather,
  routing: routerReducer
})

export default rootReducer
