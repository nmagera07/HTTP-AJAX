import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            item: "friend"
         }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.email]: e.target.value
        })
    }

    addFriend = e => {
        e.preventDefault()
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
                        value={this.state.friend}
                        name="Friend"
                        onChange={this.handleChanges}
                        placeholder="Name"
                    />
                    <input 
                        value={this.state.friend}
                        name="Age"
                        onChange={this.handleChanges}
                        placeholder="Age"
                    />
                    <input 
                        value={this.state.friend}
                        name="Email"
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