import React, { Component } from 'react';
import './showuser.css';

import ShowUserSmall from './showusersmall';
import ShowUserInfo from './showuserinfo';

import axios from 'axios'


class ShowUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            usertoshow: 'init'
        }
    }

componentDidMount(){
    axios({
        method: 'get',
        url: 'http://localhost:5000/user/getallusers/',
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





renderUserInfo(){
    if(this.state.usertoshow && this.state.usertoshow !== 'init'){
        return <ShowUserInfo userid={this.state.usertoshow}/>
    }
    else
    {
        return null
    }
}




    render() {

        let data = this.state.data;

        return (
        <div className='col-md-6 showuserwrapper'>
            <div className='col-md-3 showusername'>
                <h2>Username</h2>
                {data.map((obj, index) => <ShowUserSmall key={index} data={obj} />)}
            </div>

            <div className='col-md-9 showuserinfo'>
                <h2>Userinformation</h2>

            </div>
        </div>    

        )
    }


}

export default ShowUser;