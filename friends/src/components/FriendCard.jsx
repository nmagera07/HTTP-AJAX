import React from 'react';

const FriendCard = (props) => {
    return ( 
        <div className="friendCard">
            <div className="friendCard2">
                <p>Name: {props.itemProps.name}</p>
                <p>Age: {props.itemProps.age}</p>
                <p>Email: {props.itemProps.email}</p>
                
                
            </div>
        </div>
     );
}
 
export default FriendCard;
 
