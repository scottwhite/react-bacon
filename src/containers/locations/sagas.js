import { call, put } from 'redux-saga/effects'
import { push as routerpush } from 'react-router-redux'
import Api from '../../api'

// worker Saga: will be fired on LOCATIONS_GET_REQUESTED actions
export function* fetchLocations(action) {
  try {
    const data = yield call(Api.locations, action.search)
    yield put({type: 'LOCATIONS_GET_SUCCEEDED', locations: data})
  } catch (e) {
    yield put({type: 'LOCATIONS_GET_FAILED', message: e.message})
  }
}
// worker Saga: will be fired on LOCATION_DETAILS_GET_REQUESTED actions
export function* fetchLocationDetails(action) {
  function latLng(data){
    let {lat, lng} = data.result.geometry.location
    return lat + ', ' + lng
  }
  try {
    const data = yield call(Api.location_details, action.placeid)
    yield put({type: 'LOCATION_DETAILS_GET_SUCCEEDED', details: data})
    yield put(routerpush('/weather/' + latLng(data)))
  } catch (e) {
    console.error(e)
    yield put({type: 'LOCATION_DETAILS_GET_FAILED', message: e.message})
  }
}
