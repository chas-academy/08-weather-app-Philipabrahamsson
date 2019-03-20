import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
componentWillMount() {
  axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9f39469bfde7207769ea0afe962b7dd4/37.8267,-122.4233').then(res => console.log(res))
}

render() {
 
  var { isLoaded, items } = this.state;
 
  if (!isLoaded) {
    return <div>Loading...</div>;
} else {
    return (
     <div className="App">
      <ul>
        {items.map(item => (
          <li key={item.id}>
            
          </li>
        ))};
      </ul>
     </div>
    );
  }
}
}
export default App;
