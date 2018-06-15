import React, { Component } from 'react';
import './showuser.css';

class ShowUserSmall extends Component {
    constructor(props){
        super(props);
        
    }






    render() {
        return (
            <div className='col-md-12 showusersmall'>
                <p>{this.props.data.username}</p>

            </div>

        )
    }


}

export default ShowUserSmall;