import React, { Component } from 'react';
import './showuser.css';
import axios from 'axios';

// AUF JEDEN FALL EINE DOC SCHREIBEN !!!!!
class ShowUserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }


componentDidMount(){
    axios({
        method: 'get',
        url: 'http://localhost:5000/user/getuserdata/' + this.props.userid,
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
    

componentWillReceiveProps(){
    axios({
        method: 'get',
        url: 'http://localhost:5000/user/getuserdata/' + this.props.userid,
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
            <div className='col-md-12 showuserinfo'>
                <p>{this.state.data.username}</p>
                <p>{this.state.data.userphone}</p>
                <p>{this.state.data.useremail}</p>
                <p>{this.state.data.timesignedup}</p>
            </div>

        )
    }


}

export default ShowUserInfo;