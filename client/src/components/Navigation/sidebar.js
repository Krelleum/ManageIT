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


    onClick(){
        this.context.router.history.push(`/dashboard`)
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
                            <a><i className="material-icons" onClick={this.onClick.bind(this)}>dashboard</i></a>
                        </li>
                       


                        <li>
                            <NavLink to='dashboard'><i className="material-icons">dashboard</i></NavLink>
                        </li>
                        
                        <li>
                            <NavLink to='user'><i className="material-icons">person</i></NavLink>
                        </li>

                        <li>
                            <NavLink to='orders'><i className="material-icons">assignment</i></NavLink>
                        </li>

                        <li>
                            <NavLink to='Customer'><i className="material-icons">people</i></NavLink>
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