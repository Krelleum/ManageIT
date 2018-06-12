import  React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    

    logOut(){
        localStorage.clear();
        window.location.reload()
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
                            <Link to='dashboard'><i className="material-icons">dashboard</i></Link>
                        </li>
                        
                        <li>
                            <Link to='user'><i className="material-icons">person</i></Link>
                        </li>

                        <li>
                            <Link to='orders'><i className="material-icons">assignment</i></Link>
                        </li>

                        <li>
                            <Link to='Customer'><i className="material-icons">people</i></Link>
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