import React from 'react';
import FriendList from './components/FriendList'
import Form from './components/Form'
import UpdateForm from './components/UpdateForm'
import Nav from './components/Nav'
import axios from 'axios'
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      activeFriend: null
     }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/')
      .then((res) => {
        console.log(res)
      this.setState({ items: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addFriend = (newFriend) => {
    axios
    .post('http://localhost:5000/friends', newFriend)
    .then((res) => {
      console.log(res)
    this.setState({ 
      items: res.data,
     })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  deleteFriend = (e, friends) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:5000/friends/${friends.id}`, friends)
      .then((res) => {
        console.log(res)
      this.setState({
        items: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  setUpdateForm =(e, item) => {
    e.preventDefault()
    this.setState({ activeFriend: item })

  }

  updateFriend = friends => {
    axios
      .put(`http://localhost:5000/friends/${friends.id}`, friends)
      .then((res) => {
        console.log(res)
        this.setState({
          items: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() { 
    return ( 
      <div>
        <Router>
        <Route path="/" component={Nav} />
        <Route
          path="/friend-list"
          render={props => (
            <FriendList 
              items={this.state.items}
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm}
            />
          )}
          />
        
        <Route 
          exact path="/add-friend"
          render={props => (
            <Form
              {...props}
              addFriend={this.addFriend} 
              />
            )}
          />
     
          <Route 
            path="/update-form" 
            render={props => (
              <UpdateForm
                {...props}
                updateFriend={this.updateFriend} 
                activeFriend={this.state.activeFriend} 
              />
            )}
          />
          
          </Router>
      </div>
      
     );
  }
}
 
export default App;
