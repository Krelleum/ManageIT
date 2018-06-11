import  React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {


    render() {


        return (


            <div className="wrapper">

                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>ManageIT</h3>
                    </div>

                    <ul className="list-unstyled components">
                        
                       
                        
                        <li>
                            <Link to='dashboard'>Dashboard</Link>
                        </li>
                        
                        <li>
                            <Link to='User'>User</Link>
                        </li>

                    </ul>

                    
                </nav>
            </div>
        )


    }


}

export default SideBar