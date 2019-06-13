import React from 'react';
import {Link} from 'react-router-dom'
class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friend: this.props.activeFriend
         }
    }

     handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value     
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateFriend(this.state.friend)
    }

    render() { 
        return ( 
            <div className="form-style">
                <form onSubmit={this.handleSubmit}>
                    <h2>Edit your friend =(</h2>
                    <input 
                        type="text"
                        value={this.state.name}
                        name="name"
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
                    <button onClick={this.handleSubmit}>Edit Friend</button>
                </form>
                
            </div>
         );
    }
}
 
export default UpdateForm;