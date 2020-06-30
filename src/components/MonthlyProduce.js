import React from "react";
import PropTypes from 'prop-types';


function MonthlyProduce(props) {
  return (
    <React.Fragment>
      <h3>Month: {props.month}</h3>
      <h3>Selection:</h3>
      {props.selection.map(name => (
          <li> {name}</li>
      ))}
      <hr />
    </React.Fragment>
  )
}

MonthlyProduce.prototypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default MonthlyProduce;


