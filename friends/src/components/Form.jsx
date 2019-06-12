import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: {
                name: "",
                age: "",
                email: ""
            }
            
         }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        this.props.addFriend(this.state.friend)
        this.setState({
            friend: ""
        })
    }

    render() { 
        return ( 
            <div className="form-style">
                <form>
                    <h2>Enter a new friend!</h2>
                    <input 
                        type="text"
                        value={this.state.name}
                        name="friend"
                        onChange={this.handleChanges}
                        placeholder="Name"
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