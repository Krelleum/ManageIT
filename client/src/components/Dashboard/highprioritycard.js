import React, { Component } from 'react';
import axios from 'axios';

import './dashboard.css';

class HighPriorityCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        axios({
            method: 'get',
            url: 'http://localhost:5000/order/getopenorders',
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


    filterPriority(){
        
        if (data != [])
        var data = this.state.data
        
        var filtered = data.filter(obj => 
            obj.orderpriority == 'high'
        )
        console.log(filtered)
        return filtered.length
    }


    render() {
        return (
            <div className='col-md-2 highprioritycard'>
                <p>You have got</p>
                <h2>{this.filterPriority()}</h2>
                <p>High Priority Orders</p>
            </div>
        )
    }
}

export default HighPriorityCard;