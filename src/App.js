import React, { Component } from 'react';
import Users from '../src/components/Users';

import './App.css';

const URL = 'https://randomuser.me/api?results=25';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    let res = await fetch(URL);
    let json = await res.json();
    let { results } = json;

    this.setState({
      users: results
    });
  }

  componentDidUpdate() {
    console.log('Updated', this.state.users)
  }

  render() {
    return (
      <div className="App">
        <p><span className="page-title">Address Book</span> 
        <br/> Click for more information </p>
        <Users people={this.state.users} />
      </div>
    );  
  }
}

export default App;