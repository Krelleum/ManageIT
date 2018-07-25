import React, { Component } from 'react';

import axios from 'axios';

import getShift from '../classifier/getshift';

class StatsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }


    componentDidMount() {
        

        axios({
            method: 'get',
            url: 'http://localhost:5000/timestamp/gettimestamp',
            header: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('tkey'),
            }
        })
            .then(response => {
                this.setState({
                    data: response.data
                })
                console.log(this.state.data)
                
            })
            .catch(err => {
                console.log(err)
            })


    }

    alertme(){
        
        var data = this.state.data
        if (data)
        alert(data.mofirst)
    }
   

   


    render() {
        return (
            <div>
                <p>dasjkl</p>
                {this.alertme()}
            </div>
        )
    }
}

export default StatsCard;