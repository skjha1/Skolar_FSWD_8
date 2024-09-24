// src/UserProfile.js
import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      this.setState({ user: data.results[0], loading: false });
    } catch (error) {
      this.setState({ error: error.messagse, loading: false });
    }
  };

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <p className="loading">Loading...</p>;
    }

    if (error) {
      return <p className="error">Error: {error}</p>;
    }

    return (
      <div className="user-profile">
        <img src={user.picture.large} alt={user.name.first} className="profile-picture" />
        <h1>{user.name.first} {user.name.last}</h1>
        <p>Email: {user.email}</p>
        <p>Location: {user.location.city}, {user.location.country}</p>
        <button onClick={this.fetchUser} className="button">Load New User</button>
      </div>
    );
  }
}

export default UserProfile;
