import React from 'react'
import './weather.css'
import WeatherIcon from './weather-icon'

export const WeatherList = (props) => {
  let weather = props.weather || {};
  let days = []
  let summary = ''
  if(weather.data){
    days = weather.data
  }
  if(weather.summary){
    summary = weather.summary
  }
  function selectWeather(day){
    props.onClick(day)
  }
  function formatWeatherDate(value){
    let d = new Date(value * 1000)
    return d.toDateString()
  }
  return (
    <div className='container-fluid'>
      <h2>Weather</h2>
      <div>{summary}</div>
      <ul className='weather-list'>
        {
          days.map((day, idx) => (
            <li key={day.time} onClick={selectWeather}>
              <div className='weather-day'>{formatWeatherDate(day.time)}</div>
              <WeatherIcon id={day.time + ''} name={day.icon} />
              <div className='weather-summary'>{day.summary}</div>
              <div className='weather-temp'><label>Low</label> {day.temperatureMin}&deg; F</div>
              <div className='weather-temp'><label>High</label> {day.temperatureMax}&deg; F</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

WeatherList.propTypes = {
  weather: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func
}

export default WeatherList
