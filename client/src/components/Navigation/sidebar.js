import  React, { Component } from 'react';
import './sidebar.css';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

class SideBar extends Component {
    constructor(props){
        super(props);
        
    }

    static contextTypes = {
        router: PropTypes.object
    }

    logOut(){
        localStorage.clear();
        window.location.reload()
    }

// Redirect Handles Linking to different Pages via Sidebar
    redirectDashboard(){
        this.context.router.history.push(`/dashboard`)
    }

    redirectUser(){
        this.context.router.history.push(`/user`)
    }

    redirectOrder(){
        this.context.router.history.push(`/orders`)
    }

    redirectCustomer(){
        this.context.router.history.push('/customer')
    }

    render() {


        return (


            <div className="wrapper">

                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>M</h3>
                    </div>

                    <ul className="list-unstyled components">
                        
                        <li>
                            <a><i className="material-icons" onClick={this.redirectDashboard.bind(this)}>dashboard</i></a>
                        </li>

                        <li>
                            <a><i className="material-icons" onClick={this.redirectUser.bind(this)}>person</i></a>
                        </li>

                        <li>
                            <a><i className="material-icons" onClick={this.redirectOrder.bind(this)}>assignment</i></a>
                        </li>

                        <li>
                            <a><i className="material-icons" onClick={this.redirectOrder.bind(this)}>people</i></a>
                        </li>

                       
                   
                        <li onClick={this.logOut.bind(this)}>
                            <a><i className="material-icons">power_settings_new</i></a>
                        </li>

                    </ul>

                    
                </nav>
            </div>
        )


    }


}

export default SideBar