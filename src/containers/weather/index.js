import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './actions'
import WeatherList from './weather-list'

export class Weather extends Component {
  componentDidMount(){
    let fetchWeather = this.props.fetchWeather
    let latlng = this.props.params.latlng
    fetchWeather(latlng)
  }
  render() {
    const {error, weather} = this.props;
    let err = '';
    if(error){
      err = (<div className='alert alert-danger'>{error}</div>)
    }
    return (
      <div className='container-fluid'>
        {err}
        <WeatherList weather={weather} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { weather, error } = state.weather;
  return {
    weather,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
