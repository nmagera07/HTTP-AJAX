import React from 'react';
import {Redirect} from 'react-router-dom'
class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friend: this.props.activeFriend,
            redirect: false
         }
    }

     handleChanges = e => {
        this.setState({
            friend: {
                ...this.props.activeFriend,
                [e.target.name]: e.target.value 
            }
              
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateFriend(this.state.friend)
        this.setState({
            redirect: true
        })
        
    }



    render() { 
        if (this.state.redirect) {
            return <Redirect push to="/friend-list" />
        }
        return ( 
            <div className="form-style">
                <form onSubmit={this.handleSubmit}>
                    <h2>Edit your friend =(</h2>
                    <input 
                        type="text"
                        value={this.state.friend.name}
                        name="name"
                        onChange={this.handleChanges}
                        placeholder="Name"
                    />
                    <input 
                        type="text"
                        value={this.state.friend.age}
                        name="age"
                        onChange={this.handleChanges}
                        placeholder="Age"
                    />
                    <input 
                        type="text"
                        value={this.state.friend.email}
                        name="email"
                        onChange={this.handleChanges}
                        placeholder="Email"
                    />
                    <button onClick={this.handleSubmit}>Edit Friend</button>
                </form>
                
            </div>
         );
    }
}
 
export default UpdateForm;