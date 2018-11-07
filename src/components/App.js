import React, { Component } from 'react';
import NumberDisplay from '../containers/number_display';

class App extends Component {
  render() {
    return (
      <div className="App">               
          <NumberDisplay />         
      </div>
    );
  }
}

export default App;
