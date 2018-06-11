import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import SideBarContainer from './components/Navigation/sidebarcontainer';
import { HashRouter } from 'react-router-dom';

import DashBoardContainer from './components/Dashboard/dashboardcontainer';
import ShowUserContainer from './components/User/showusercontainer';

class App extends Component {





  render() {

    return (
      <div>


        
        <HashRouter>
          <div>
            <SideBarContainer />
            <Route path='/dashboard' component={DashBoardContainer}></Route>
            <Route path='/user' component={ShowUserContainer}></Route>
          </div>
        </HashRouter>

      </div>

    );
  }
}

export default App;
