import { call, put } from 'redux-saga/effects'
import Api from '../../api'

// worker Saga: will be fired on WEATHER_GET_REQUESTED actions
export function* fetchWeather(action) {
  try {
    const data = yield call(Api.weather, action.latlng)
    yield put({type: 'WEATHER_GET_SUCCEEDED', weather: data})
  } catch (e) {
    yield put({type: 'WEATHER_GET_FAILED', message: e.message})
  }
}
