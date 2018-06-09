import React, { Component } from 'react';
// import './../flexbox-grid.css'
import './dashboard.css'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            search: '',
            userposts: true
        };

        this.handleSearchChange = this.handleSearchChange.bind(this)
    }


    handleSearchChange(value) {
        this.setState({
            search: value
        })
    }


    render() {
        return (
            <div className='dash-main'>
                <input
                    value={this.state.search}
                    placeholder="search"
                    onChange={(e) => this.handleSearchChange(e.target.value)}

                />
            </div>
        );
    }
}

export default Dashboard;