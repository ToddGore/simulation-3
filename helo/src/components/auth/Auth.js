import React, { Component } from 'react';
import axios from 'axios';
import './../flexbox-grid.css'
import './auth.css'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };


        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }



    handleUserNameChange(value) {
        this.setState({ username: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    register() {
        axios.post('/register', { name: this.state.userInput })
            .then(res => {
                this.setState({
                    userInput: '',
                    students: res.data
                })
            })
    }

    login() {

    }



    render() {
        return (
            <div className='auth-main'>
                <h1>Helo</h1>
                <input
                    value={this.state.username}
                    placeholder="username"
                    onChange={(e) => this.handleUserNameChange(e.target.value)}
                />
                <br />
                <input
                    value={this.state.password}
                    placeholder="password"
                    onChange={(e) => this.handlePasswordChange(e.target.value)}
                />
                <br />
                <button>Login</button>
                <button>Register</button>
            </div>
        );
    }
}

export default Auth;