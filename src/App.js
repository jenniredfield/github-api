import React, { Component } from 'react';
import './App.css';
import Repos from './Repos.js';

class App extends Component {
  state = {
    userInput: '',
    repos: [],
    repoNotFound: false,
    loading: false
  };

  handleInput = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  fetchRepo = () => {
    if (this.state.userInput === '') {
      return;
    }

    this.setState({
      loading: true
    });

    fetch(
      `https://api.github.com/search/repositories?q=${this.state.userInput}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.total_count === 0) {
          this.setState({
            repoNotFound: true,
            loading: false
          });
        }

        let sortedResult = res.items.sort((a, b) => {
          return b.forks_count - a.forks_count;
        });

        this.setState({
          repos: sortedResult,
          repoNotFound: false,
          loading: false
        });
      });
  };

  render() {
    return (
      <div className="App">
        <div className="header-wrapper">
          <h1>Github Repo Finder</h1>
          <small>Displays first 30 repos sorted by the number of forks</small>
          <input
            onChange={this.handleInput}
            onKeyPress={event => {
              if (event.key === 'Enter') this.fetchRepo();
            }}
            placeholder="i.e tetris, hangman etc"
          ></input>
          <button onClick={this.fetchRepo}>Find Repo!</button>
        </div>
        <Repos
          repos={this.state.repos}
          repoNotFound={this.state.repoNotFound}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
