import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashBoardUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'init'
        }
    }



    render(){
        return(
            <div className='col-md-4 dashboarduserwrapper'>
            
            <div className='dashboarduserheading'>
                <h2>Welcome {this.props.data.username}</h2>
                    <p>{new Date().getHours()}:{new Date().getMinutes()}</p>
            </div>
            
            
            <div className='dashboarduserdata'>
                <p>Email: {this.props.data.useremail}</p>
                <p>Phone: {this.props.data.userphone}</p>
                <p>Orders Created: {this.props.data.createdorders}</p>
            </div>
            
            <div className='dashboarduserlinks'>
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
            
            
            </div>
            
            
            </div>
        )
    }

}

export default DashBoardUser;