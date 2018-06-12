import React, { Component } from 'react';

import './dashboard.css';
import DashBoardUser from './dashboarduser';



import axios from 'axios';


class DashBoardContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'init',
            userid: localStorage.getItem('userid')
        }
    }



componentDidMount(){
    
    const userid = this.state.userid;
    
    axios({
        method: 'get',
        url: 'http://localhost:5000/user/getuserdata/' + userid,
        header: {
            'Content-Type' : 'application/json',
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



    

    render(){
        return(
            <div className='col-md-12 dashboardcontainer'>
            <h1>DASHBOARD</h1>
            
            <div className='row'>
                <DashBoardUser data={this.state.data}/>
                    <DashBoardUser data={this.state.data} />
                    <DashBoardUser data={this.state.data} />
            </div>
            
            </div>
        )
    }


}

export default DashBoardContainer;