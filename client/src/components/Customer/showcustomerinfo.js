import React, { Component } from 'react';
import './showcustomer.css';
import axios from 'axios';

// AUF JEDEN FALL EINE DOC SCHREIBEN !!!!!
class ShowUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:5000/customer/findcustomerid/' + this.props.customerid,
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


    componentWillReceiveProps() {
        axios({
            method: 'get',
            url: 'http://localhost:5000/customer/findcustomerid/' + this.props.customerid,
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
            <div className='col-md-12 showcustomerinfo'>
                <div className='showcustomerinfoheader'>
                    <p>{this.state.data.name}</p>
                </div>
               

            </div>

        )
    }


}

export default ShowUserInfo;