import React, { Component } from 'react';

export default class profile extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('/user/profile')
      .then(res => res.json())
      .then(res => this.setState({message: res}));
  }

  logout = () => {
    fetch('/user/logout')
    .then(res => {
      if (res.status === 200) {
        alert('Logged Out')
        window.location.href='/'
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>{this.state.message.email}</p>
        <p>{this.state.message.password}</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}