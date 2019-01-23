import React, { Component } from 'react';
// import _ from 'lodash';

// import Calendar from './components/Calendar';
import Lists from './components/Lists';
// import users from'./data/users.json';
// import rules from'./data/rules.json';

class App extends Component {
  state = {
    weeks: [5, 7, 12, 14, 19, 21, 26, 28],
    dayW: 2,
  };

  render() {
    return (    
      <div className="App ui container">
        <h1>SEMA</h1>
        {/* <Calendar/> */}
        <Lists />      
      </div>
    );
  }
}

export default App;
