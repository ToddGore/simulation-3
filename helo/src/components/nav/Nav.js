import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import './../flexbox-grid.css'
import './nav.css'
import homeLogo from '../../assets/home_logo.png'
import newLogo from '../../assets/new_logo.png'
import powerOff from '../../assets/shut_down.png'



export default function Nav() {

    return (
        <div className='main'>
            <div className='section one' >
                <div className='userImage' ></div>
            </div>
            <div className='section two' >
                <Link to='/dashboard'>
                    <div class="home-text">Dashboard</div>
                    <input type="image" className='icons' src={homeLogo} alt="" />
                </Link>
            </div>
            <div className='section three' >
                <Link to='/post/:postid'>
                    <div class="home-text">Post</div>
                    <input type="image" className='icons' src={newLogo} alt="" />
                </Link>
            </div>
            <div className='section four' >
                <Link to='/'>
                    <div class="home-text">Login</div>
                    <input type="image" className='icons' src={powerOff} alt="" />
                </Link>
            </div>
        </div>

    )


}


function mapStateToProps(state) {
    return {
        user: state.user
    }
}



// export default connect(mapStateToProps)
