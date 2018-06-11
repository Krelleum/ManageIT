import React, { Component } from 'react';
import './appcontainer.css';

import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import DashBoardContainer from '../Dashboard/dashboardcontainer';
import ShowUserContainer from '../User/showusercontainer';
import SideBarContainer from '../Navigation/sidebarcontainer';


class AppContainer extends Component {


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

export default AppContainer;