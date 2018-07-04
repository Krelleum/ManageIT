import React, { Component } from 'react';
import axios from 'axios';

import './dashboard.css';

class OpenOrderCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'init'
        }
    }
    
    componentWillMount(){
        axios({
            method: 'get',
            url:'http://localhost:5000/order/getopenorders',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('tkey')
            }
        })
        .then(response => {
           
            this.setState({
                    data: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    
    render(){
        return(
            <div className='col-md-2 openordercard'>
                <p>You have got</p>
                <h2>{this.state.data.length}</h2>
                <p>Open Orders</p>
            </div>
        )
    }
}

export default OpenOrderCard;