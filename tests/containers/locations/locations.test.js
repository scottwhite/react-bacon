import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import {Location} from '~/src/containers/locations/index';
import locationActions from '~/src/containers/locations/actions'
import {places} from '~/mock-data/api.locations.mock'

describe('Location', () => {
  it('has an input that searches', () => {
    let locationChangeReal = locationActions.locationChange
    let search = 'washing'
    let locationChangeMock = (evnt)=>{
      let message = locationChangeReal(evnt)
      if(evnt.charCode === 13){
        expect(message.type).toBe('LOCATIONS_GET_REQUESTED')
        expect(message.search).toBe(search)
      }
    }

    const component = renderer.create(
      <Location locationChange={locationChangeMock}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()

    let evnt = {charCode: 13, target: {value: search}}
    tree.children[1].props.onKeyPress(evnt)
  });

  it('shows a list if places that you can select an item', ()=>{
    let locationDetailsReal = locationActions.locationDetails
    let target = places.predictions[1]
    let targetid = target.place_id
    let locationDetailsMock = (placeid)=>{
      let message = locationDetailsReal(placeid)
      expect(message.type).toBe('LOCATION_DETAILS_GET_REQUESTED')
      expect(placeid).toBe(targetid)
    }
    const component = renderer.create(
      <Location locations={places.predictions} locationDetails={locationDetailsMock}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
    // BRITTLE!!!!!!
    // proposal for built in selectors
    // https://github.com/facebook/react/pull/7409
    tree.children[2].children[1].children[1].children[0].props.onClick()
  })

  it('shows an error if error', ()=>{
    let error = 'ERROR!'
    const component = renderer.create(
      <Location error={error}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })

});
