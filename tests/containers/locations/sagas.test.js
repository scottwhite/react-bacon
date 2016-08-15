// import {jest} from 'jest'
import {places} from '~/mock-data/api.locations.mock'
import { takeEvery } from 'redux-saga'
import { fork, take, put, call } from 'redux-saga/effects'
import {fetchLocations, fetchLocationdetails } from '~/src/containers/locations/sagas'
import nock from 'nock'
import Api from '~/src/api'

nock('http://localhost:3000/').get('/locations/').reply(()=>{
  console.log('say what')
  return places;}
)

const LGR = 'LOCATIONS_GET_REQUESTED'
const LGS = 'LOCATIONS_GET_SUCCEEDED'

describe('App Sagas', function() {
	// let iterator;
  let actualYield;
  let expectedYield;

  //mock

  // `takeEvery` first does a `TAKE` on the action you give it
  it('should put the LOCATIONS_GET_SUCCEEDED action', () => {
    let fakeAction = { type: LGR, search: 'washing' };
    let iterator = fetchLocations(fakeAction);
    actualYield = iterator.next().value;
    expectedYield = call(Api.locations, fakeAction.search);
    expect(actualYield).toEqual(expectedYield);
    actualYield = iterator.next(places).value;
    expectedYield = put({type: LGS, locations: places});
    expect(actualYield).toEqual(expectedYield);
  });
});
