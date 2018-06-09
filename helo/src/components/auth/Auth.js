import React, { Component } from 'react';
import axios from 'axios';
// import './../flexbox-grid.css'
import './auth.css'
import heloLogo from '../../assets/helo_logo.png'


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
        axios.post('/api/register', { name: this.state.userInput }) // Wrong
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
                <div className='section-logo'>
                    <img src={heloLogo} alt="Logo" />
                </div>
                <div className='section-title'>
                    <h1>Helo</h1>
                </div>
                <div className='section-username'>
                    <p>username: </p>
                    <input
                        value={this.state.username}
                        placeholder="username"
                        onChange={(e) => this.handleUserNameChange(e.target.value)}
                    />
                </div>
                <div className='section-password'>
                    <p>password: </p>
                    <input
                        value={this.state.password}
                        placeholder="password"
                        onChange={(e) => this.handlePasswordChange(e.target.value)}
                    />
                </div>
                <div className='section-buttons'>
                    <button className='auth-button'>Login</button>
                    <button className='auth-button'>Register</button>
                </div>
            </div>
        );
    }
}

export default Auth;