import React from 'react';
import FriendCard from './FriendCard'

const FriendList = (props) => {
    return ( 
         <div>
            {props.items.map(item => (
                <FriendCard key={item.id} itemProps={item} />
            ))}
        </div>
     );
}
 
export default FriendList;