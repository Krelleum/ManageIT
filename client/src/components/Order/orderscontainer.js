import React, { Component } from 'react';
import './orderscontainer.css';

import OrderForm from './Orderform/orderform';

class OrdersContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <div className='col-md-12 orderscontainer'>
                <h1>ORDERS</h1>
                <div className='row'>
                    <div className='col-md-4 createorderscontainerwrapper'>
                        <OrderForm/>
                    
                    </div>
                    <div className='col-md-4 openorderscontainerwrapper'>
                    
                    </div>
                    <div className='col-md-4 closedorderscontainerwrapper'>
                    
                    
                    </div>
                </div>
            
            
            
            </div>
        )
    }

}


export default OrdersContainer;
