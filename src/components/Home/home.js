import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h2>Home</h2>
                <p>Examples can be accessed from the top navigation.</p>
                {/* <p><Link className="inline-link" to="/users">Users</Link> example shows a straight-forward implementation with nested routes.</p>
                <p><Link className="inline-link" to="/posts">Posts</Link> example shows an implementation using a central route config (server-rendered apps might use this).</p> */}
            </div>
        )
    }
}
