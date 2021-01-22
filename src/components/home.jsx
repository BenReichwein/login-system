import React, { Component } from 'react';
import API from '../api';

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }
  
  componentDidMount() {
    API.get(`home`)
      .then(res => res.data)
      .then(res => this.setState({message: res}));
  }
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}