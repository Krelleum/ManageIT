import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';


class App extends Component {
  
  componentWillMount(){
    axios({
      method: 'get',
      url:'http://localhost:5000/'
    }).then((response) => {
      console.log(response.data.message)
    })

    
  }
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <p>hello</p>
      </div>
    );
  }
}

export default App;
