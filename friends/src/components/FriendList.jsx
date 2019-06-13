import React from 'react';
import FriendCard from './FriendCard'

const FriendList = (props) => {
    return ( 
         <div>
            {props.items.map(item => (
                <div>
                    <FriendCard 
                        key={item.id} 
                        itemProps={item} 
                    />
                    <div>
                        <button onClick={e => props.setUpdateForm(e, item)}>Edit</button>
                        <button onClick={e => props.deleteFriend(e, item)}>Delete</button> 
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default FriendList;