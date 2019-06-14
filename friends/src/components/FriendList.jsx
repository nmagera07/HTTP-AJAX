import React, {useState} from 'react';
import FriendCard from './FriendCard'
import {Redirect, Link} from 'react-router-dom'

const FriendList = (props) => {
    // const [redirect, setRedirect] = useState(false)
    return ( 
         <div>
            {props.items.map(item => (
                <div>
                    <FriendCard 
                        key={item.id} 
                        itemProps={item} 
                    />
                    <div>
                        <Link to="/update-form"><button onClick={() => props.setUpdateForm(item)}>Edit</button></Link>
                        <button onClick={e => props.deleteFriend(e, item)}>Delete</button> 
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default FriendList;