import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './../flexbox-grid.css'
import './nav.css'


export default function Nav() {

    return (
        <div className='main'>
            <Link to='/dashboard'>
                <button>Home</button>
            </Link>
            <br />
            <Link to='/post/:postid'>
                <button>New Post</button>
            </Link>
            <br />
            <Link to='/'>
                <button>Logout</button>
            </Link>
        </div>

    )


}


function mapStateToProps(state) {
    return {
        user: state.user
    }
}



// export default connect(mapStateToProps)
