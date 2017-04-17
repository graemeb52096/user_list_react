import React, { Component } from 'react';
import './App.css';
import AddUser from './AddUser';

function DisplayUsers(props) {
  return (
      <ul>
        {props.users.map((user) =>
          <li key={user.id}>{user.id} {user.firstName} {user.lastName}</li>
        )}
      </ul>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    this.addUser = this.addUser.bind(this);
    this.state = {
      users: this.users
    }
  }
  users = [
    {id: 0, firstName: 'Graeme', lastName: 'Bates'},
    {id: 1, firstName: 'Chris', lastName: 'Zenti'},
    {id: 2, firstName: 'Taylor', lastName: 'Abela'}
  ];

  addUser(user){
    this.users.push(user);
    this.setState({users: this.state.users.concat(user)});
  }

  render() {
    return (
        <div>
          <AddUser handler={this.addUser} />
          <DisplayUsers users={this.state.users} />
        </div>
    );
  }
}

export default App;
