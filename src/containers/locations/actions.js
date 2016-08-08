export const locationActions = {
  locationChange(evnt){
    if (evnt.charCode === 13){
      let search = evnt.target.value;
      return{
        type: 'LOCATIONS_GET_REQUESTED',
        search
      }
    }
    return { type: 'NOTHING' }
  },
  locationDetails(placeid){
    return {
      type: 'LOCATION_DETAILS_GET_REQUESTED',
      placeid
    }
  },
  weatherFor(latlng){
    let path = '/weather/' + latlng
    return {
      type: 'ROUTE_TO',
      path
    }
  }
}

export default locationActions
