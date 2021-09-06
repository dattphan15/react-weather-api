import React, { Component } from 'react';

console.log(process.env.REACT_APP_WEATHER_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  render() {
    return <div className="App">hello</div>;
  }
}

export default App;
