import React, { Component } from 'react';
import './../flexbox-grid.css'
import './post.css'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='post-main'>
                New Post
            </div>
        );
    }
}

export default Post;