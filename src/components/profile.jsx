import React, { Component } from 'react';

export default class profile extends Component {
  constructor() {
    super();
    this.state = {
      email : '',
      password: ''
    }
  }

  componentDidMount() {
    fetch('/user/profile')
      .then(res => res.json())
      .then(res => this.setState({
        email: res.email,
        password: res.password
      }));
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch('/user/update', {
      method: 'PATCH',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.text())
    .then(res => alert(res))
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
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit" value="Submit">Update</button>
        </form>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}