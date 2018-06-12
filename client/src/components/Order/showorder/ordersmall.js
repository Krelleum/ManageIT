import React, { Component } from 'react';
import './ordersmall.css';
class OrderSmall extends Component{



    render(){
        return (
            <div className='col-md-12 ordersmallwrapper'>
                <p>{this.props.data.orderheading}</p>
                <p>{this.props.data.ordershort}</p>
            </div>
        )
    }
}

export default OrderSmall;