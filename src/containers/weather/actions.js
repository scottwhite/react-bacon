const actions = {
  fetchWeather(latlng){
    return {
      type: 'WEATHER_GET_REQUESTED',
      latlng
    }
  }
}


export default actions
