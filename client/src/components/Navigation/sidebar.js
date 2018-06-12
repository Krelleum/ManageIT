import  React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {


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
                            <Link to='User'><i className="material-icons">person</i></Link>
                        </li>

                        <li>
                            <Link to='Order'><i className="material-icons">assignment</i></Link>
                        </li>

                        <li>
                            <Link to='Customer'><i className="material-icons">people</i></Link>
                        </li>

                    </ul>

                    
                </nav>
            </div>
        )


    }


}

export default SideBar