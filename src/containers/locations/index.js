import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Places from './places';
import locationActions from './actions'

export class Location extends Component {
  render() {
    const {error, locations, locationDetails, locationChange} = this.props;
    let err;
    if(error){
      err = (<div className='alert alert-danger'>{error}</div>)
    }
    return (
      <div className='container-fluid'>
        {err}
        <div>Search for a place for weather</div>
        <input onKeyPress={locationChange} />
        <Places locations={locations || []} onSelected={locationDetails} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { locations, error } = state.locations;
  return {
    locations,
    error
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(locationActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
