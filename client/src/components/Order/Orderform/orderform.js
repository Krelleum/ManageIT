import React, { Component } from 'react';

class OrderForm extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className='col-md-12 orderformwrapper'>
                <div className='orderformheading'>
                    <h2>Create Order</h2>
                </div>

                <div className='orderform'>

                    
                        <input type='text' id='titel' placeholder='Titel'></input>
                        <input type='text' id='name' placeholder='Customername'></input> 
                    
                    
                
                    
                
                
                
                
                </div>
            
            </div>
        )
    }


}