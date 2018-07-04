import React, { Component } from 'react';
import '../inbox.css';

import axios from 'axios';

class ShowMessageSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }



componentDidMount(){
    console.log(this.props.data)
}




    render() {



        return (
            <div className='col-md-12 showmessagesmall'>
            <p>{this.props.data.messagetext}</p>

            </div>

        )
    }


}

export default ShowMessageSmall;