import React, { Component } from 'react';
import axios from 'axios';

import './dashboard.css';

class MessageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const userid = localStorage.getItem('userid');

        axios({
            method: 'get',
            url: 'http://localhost:5000/inbox/getallmessages/' + userid,
            header: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('tkey'),
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
            <div className='col-md-4 messagecard'>
                
                <h2>{this.state.data.messages && this.state.data.messages.length}</h2>
                <p>Messages</p>
                
            </div>
        )
    }
}

export default MessageCard;