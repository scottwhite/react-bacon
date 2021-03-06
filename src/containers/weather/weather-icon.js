import React from 'react'
import Skycons from '../../skycons'

export class WeatherIcon extends React.Component{
  _convertColor(name){
    if(name === 'clear-day'){
      return 'yellow';
    }
    if(name === 'wind'){
      return 'blue';
    }
    return 'gray';
  }
  componentDidMount(){
    let { id, name } = this.props;

    let skycons = new Skycons({'color': this._convertColor(name)});
    skycons.add(id, name);
    skycons.play();
  }
  render(){
    let width = this.props.size === 'large' ? 128 : 64
    let height = this.props.size === 'large' ? 128 : 64
    let {id} = this.props;
    return (
      <canvas id={id} width={width} height={height}>{this.props.name}</canvas>
    )
  }
}

WeatherIcon.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

WeatherIcon.defaultProps = {
  size: 'large'
}
export default WeatherIcon
