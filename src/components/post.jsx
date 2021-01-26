import React, { Component } from 'react';

export default class post extends Component {
  constructor() {
    super();
    this.state = {
        posts: [],
        title: '',
        description: ''
    }
  }
  
    componentDidMount() {
        fetch('/posts')
        .then(res => res.json())
        .then(res => this.setState({posts: res}));
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
        [name]: value
        });
    }

    deletePost = id => {
        fetch(`/posts/${id}`, {
        method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => this.setState({posts: res}))
        .catch(err => {
            console.error(err);
            alert('Error! try again later');
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        fetch('/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: this.state.title, 
            description: this.state.description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(res => this.setState({
          posts: res,
          title: '',
          description: ''
        }))
        .catch(err => {
        console.error(err);
        alert('Error! you must be logged in');
        });
    }
  
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
            { this.state.posts.map(post =>
            <li>
                <label>
                    {post.title}<br/>
                    {post.description}<br/>
                </label>
                <button onClick={()=> this.deletePost(post._id)}>Delete</button>
                <button onClick={()=> alert(post.user)}>User</button>
            </li>
            )}
        </ul>
        <form onSubmit={this.onSubmit}>
          <h1>Post Below!</h1>
          <input
            type="title"
            name="title"
            placeholder="Enter title"
            value={this.state.title}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="description"
            name="description"
            placeholder="Enter description"
            value={this.state.description}
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}