import React, { Component } from 'react';
import axios from 'axios';

import './dashboard.css';

class CustomerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'init'
        }
    }

    componentWillMount() {
        axios({
            method: 'get',
            url: 'http://localhost:5000/customer/getallcustomer',
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


    render() {
        return (
            <div className='col-md-3 customercard'>
                <i className="material-icons" id='openordercardicon' >people</i>
                <p>There are</p>
                <h2>{this.state.data.length}</h2>
                <p>active Customers</p>
            </div>
        )
    }
}

export default CustomerCard;