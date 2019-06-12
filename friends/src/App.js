import React from 'react';
import FriendList from './components/FriendList'
import Form from './components/Form'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
     }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((res) => {
        console.log(res)
      this.setState({ items: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addFriend = (itemName, itemAge, itemEmail) => {
    const newFriend = {
      name: itemName,
      age: itemAge,
      email: itemEmail
    }
    this.setState(prevState => {
      return {
        items: [...prevState.items, newFriend]
      }
    })
  }

  render() { 
    return ( 
      <div>
        <nav>
          <h1>My Friend List!</h1>
        </nav>
          <div className="body-style">
            <FriendList items={this.state.items}/>
            <Form addFriend={this.addFriend}/>
          </div>
      </div>
      
     );
  }
}
 
export default App;
