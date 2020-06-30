import React from 'react'
import MonthlyProduce from "./MonthlyProduce";
import SeasonalProduce from "./SeasonalProduce";

class MonthControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectValue: ""
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>

          <div>Selected value is : {this.state.selectValue}</div>
        </div>
      </div>
    );
  }
}

export default MonthControl;