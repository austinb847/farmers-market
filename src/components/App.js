import React from 'react';
import MarketSchedule from './MarketSchedule';
import MonthControl from './MonthControl';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <MarketSchedule />
          </div>
          <div class="col-md-6">
            <MonthControl />
          </div> 
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
