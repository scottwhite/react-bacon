import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import {Weather} from '../../../src/containers/weather/index';
import weatherActions from '../../../src/containers/weather/actions'
import {forecast} from '../../../mock-data/api.weather.mock'

describe('Weather', () => {
  it('shows the forecast', () => {
    let fetchWeatherReal = weatherActions.fetchWeather
    let search = 'washing'
    let fetchWeatherMock = (latlng)=>{
      let message = fetchWeatherReal(latlng)
      expect(message.type).toBe('WEATHER_GET_REQUESTED')
      expect(message.latlng).toBe(latlng)
    }
    let latlng = '38.97844529999999, -76.4921829'
    const component = renderer.create(
      <Weather fetchWeather={fetchWeatherMock} params={{latlng}} weather={forecast.daily}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
    // BRITTLE!!!
    expect(tree.children[1].children[2].children.length).toBe(forecast.daily.data.length)
  });

  it('shows an error if error', ()=>{
    let error = 'ERROR!'
    let latlng = '38.97844529999999, -76.4921829'
    const component = renderer.create(
      <Weather fetchWeather={()=>{}} params={{latlng}} weather={{}} error={error}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0]).toBe(error)
  })

});
