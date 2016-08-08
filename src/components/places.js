import React from 'react'
import './places.css'

export const Places = (props) => {
  let locations = props.locations || []
  function selectPlace(day){
    props.onSelected(day.place_id)
  }
  return (
    <div className='container-fluid'>
      <h2>Places</h2>
      <ul className='places-list'>
      {
      locations.map((item, idx) => (
        <li key={idx}>
          <a onClick={selectPlace.bind(this, item)}>{item.description}</a>
        </li>
      ))
      }
      </ul>
    </div>
  )
}

Places.propTypes = {
  locations: React.PropTypes.array.isRequired,
  onSelected: React.PropTypes.func
}

export default Places
