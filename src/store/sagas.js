import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'

import {fetchLocations, fetchLocationDetails} from '../containers/locations/sagas'
import {fetchWeather} from '../containers/weather/sagas'

function* sagas() {
  yield fork(takeEvery, 'LOCATIONS_GET_REQUESTED', fetchLocations)
  yield fork(takeEvery, 'LOCATION_DETAILS_GET_REQUESTED', fetchLocationDetails)
  yield fork(takeEvery, 'WEATHER_GET_REQUESTED', fetchWeather)
}

export default sagas
