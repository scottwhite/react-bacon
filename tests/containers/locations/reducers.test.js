import reducer from './../../../src/containers/locations/reducers';

describe('location reducer', () => {
  it('should return locations from a GET', () => {
    let locations = {predictions: {}}
    expect(
      reducer({},{type: 'LOCATIONS_GET_SUCCEEDED', locations: locations})
    ).toEqual({
      locations: locations.predictions
    })
  })
  it('should return location details', ()=>{
    let details = {result: {
      id: 123,
      geometry: {
        location : { lat: 34, lng: 34}
      }}}
    expect(
      reducer({}, {type: 'LOCATION_DETAILS_GET_SUCCEEDED', details: details})
    ).toEqual(
      {placeid: 123, latlng: '34, 34'}
    )
  })
  it('should fail and return the message', ()=>{
    let action = {type: 'LOCATIONS_GET_FAILED', message: 'error'}
    expect(
      reducer({}, action)
    ).toEqual(
      {error: action.message}
    )
  })
});
