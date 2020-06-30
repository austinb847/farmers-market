import React from 'react';
import PropTypes from 'prop-types';

 function MarketDay(props) {
  return (
    <React.Fragment>
      <h3>Day: {props.day}</h3>
      <h3>Location: {props.location}</h3>
      <h3>Hours: {props.hours}</h3>
      <h3>Booth: {props.booth}</h3>
      <hr />
    </React.Fragment>
  )
}

MarketDay.prototypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default MarketDay;