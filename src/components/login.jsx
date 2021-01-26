import React, { Component } from 'react';

export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
      system: false,
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch(`/user/${this.state.system ? 'register' : 'login'}`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.state.system ?
        alert('Registered! Put that information in again to login!'):
        this.props.history.push('/')
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in, please try again');
    });
  }

  changeSystem = () => {
    this.setState({system: !this.state.system})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>{this.state.system ? 'Sign up':'Log in'} Below!</h1>
          <button onClick={this.changeSystem}>{this.state.system ? 'Log in':'Sign up'}</button>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}