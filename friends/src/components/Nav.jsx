import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
    return ( 
        <div>
            <nav>
                <h1>Welcome to the Friend App!</h1>
                <Link to="/">Home</Link>
                <Link to="/friend-list">List of Friends</Link>
                <Link to="/add-friend">Add Friend</Link>
                <Link to="/update-form">Update Friend</Link>
            </nav>
        </div>
     );
}
 
export default Nav;