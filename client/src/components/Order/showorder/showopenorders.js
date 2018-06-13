import React, { Component } from 'react';
import axios from 'axios';

import './showorder.css';
import OrderSmall from './ordersmall';

class ShowOpenOrders extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }


    componentDidMount(){
        axios({
            method: 'get',
            url: 'http://localhost:5000/order/getopenorders',
            header: {
                'Content-Type':'application/json',
                'Authorization': localStorage.getItem('tkey'),
            }
        })
        .then(response => {
            console.log(response);
            this.setState({
                data: response.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }


  



    render() {

        let data = this.state.data;
        let reverse = data.reverse();
        return (
            <div className='col-md-12 showopenorderwrapper'>
                <div className='showopenorderheading'>
                    <h2>Open Orders</h2>
                </div>
            {reverse.map((obj, index) =>
                <OrderSmall key={index} data={obj} />
            )}
        
            </div>
        )
    }

}

export default ShowOpenOrders;