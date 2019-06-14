import React from 'react';
import {Redirect} from 'react-router-dom'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: {
                name: "",
                age: "",
                email: ""
            },
            redirect: false
            
         }
    }

    handleChanges = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }
            
        })
    }

    addFriend = e => {
        e.preventDefault()
        this.props.addFriend(this.state.friends)
        this.setState({
            friends: {
                name: '',
                age: '',
                email: ''
            },
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
                    <h2>Enter a new friend!</h2>
                    <input 
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChanges}
                        placeholder="Name"
                        required
                    />
                    <input 
                        type="text"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChanges}
                        placeholder="Age"
                    />
                    <input 
                        type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChanges}
                        placeholder="Email"
                    />
                    <button onClick={this.addFriend}>Add Friend</button>
                </form>
                
            </div>
         );
    }
}
 
export default Form;