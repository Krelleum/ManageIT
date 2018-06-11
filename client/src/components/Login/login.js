import React, { Component } from 'react';
import axios from 'axios';


class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginuser: 'init',
            loginpassword: 'init'
        }
    }
    
    // Transfers Input values into components State
    handleChange(e){
        e.preventDefault();
        console.log(this.state);
        var property = e.target.id;
        var value = e.target.value;

        this.setState({
            [property]: value
        });
    }


// Sends Components State Login Data to Server...
    handleClick(){
        
        
        var body = {
            username: this.state.loginuser,
            password: this.state.loginpassword,
        }
        
        axios({
            method: 'post',
            url:'http://localhost:5000/user/login',
            data: body,
            header: { 'Content-Type': 'application/json' }
        })
        // If Login Data is valid Token gets transfered to LocalStorage 
        .then(response => {
            if(response.status === 200){
                console.log(response.data.message)
                localStorage.setItem('tkey', response.data.token)
                localStorage.setItem('username', this.state.loginuser)
            }
            else{
                alert('UNAUTHORIZED - WRONG USERNAME OR PASSWORD')
            }
        })
        .catch(err => {
            console.log(err)
            alert('UNAUTHORIZED - WRONG USERNAME OR PASSWORD')
        })
    }


    
    
    
    render(){
        return(
            <div>
                <div className='col-md-12 loginwrapper'>
                    <div className='loginheader'>
                        <p>Login</p>
                    </div>

                    <div className='loginform'>
                        
                        <input id='loginuser' placeholder='Username' onChange={this.handleChange.bind(this)} ></input>
                        <input id='loginpassword' placeholder='Password' onChange={this.handleChange.bind(this)}></input>
                        <button id='loginbutton' onClick= {this.handleClick.bind(this)}>Login</button>
                    
                    </div>

                
                </div> 
            </div>
        )
    }
}


export default LogIn;