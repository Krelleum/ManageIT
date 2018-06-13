import React, { Component } from 'react';
import axios from 'axios';

import './orderbig.css';


class OrderBig extends Component{
   constructor(props){
       super(props);
       this.state = {
           data: []
       }
   }
   componentDidMount(){
    axios({
        method: 'get',
        url:'http://localhost:5000/order/getorderbyid/' + this.props.match.params.orderid,
        header: {
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem('tkey')
        }
    })
    .then(response => {
        this.setState({data: response.data})
        console.log(this.state.data);
    })
   }
   
   
   
   
    render(){
        return(
            <div className='col-md-12 orderbigwrapper'>
                <p>Hello OrderBig!</p>
                <p>{this.state.data.orderstatus}</p>
                <p>{this.state.data.customername}</p>
                <p>{this.state.data.orderpriority}</p>
                
            </div>
        )
    }
}

export default OrderBig;