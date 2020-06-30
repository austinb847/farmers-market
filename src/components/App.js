import React from 'react';
import MarketSchedule from './MarketSchedule';
import SeasonalProduce from './SeasonalProduce';
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="col-md-3">
          <MarketSchedule />
        </div>
        <div class="col-md-3">
          <SeasonalProduce />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
