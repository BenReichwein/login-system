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
      .then(res => res.text())
      .then(res => this.setState({message: res}));
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}