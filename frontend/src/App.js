import React, { Component } from 'react';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=49.24&lon=122.98&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="App">Data has been loaded</div>;
    }
  }
}

export default App;
