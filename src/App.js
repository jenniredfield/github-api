import React, { Component } from 'react';
import './App.css';
import Repos from './Repos.js'

class App extends Component {

  state = {

    userInput: "",
    repos: [],

  }


  handleInput = (event) => {

    console.log(event.target.value);
    this.setState({
       userInput: event.target.value,
    })

  }


  fetchRepo = (repo) => {

    repo = this.state.userInput;    
    
    fetch(`https://api.github.com/search/repositories?q=${repo}`)
    .then(res => {
      return res.json();
    }).then(res => {
      console.log(res)
       this.setState({
         repos : res.items
       })
    })

  }


  render() {
    return (
      <div className="App">
        <div className="header-wrapper">
            <h1>Github Repo Finder</h1>
            <input onChange={this.handleInput}></input>
            <button onClick={this.fetchRepo}>Find Repo!</button>
        </div>
        <Repos repos={this.state.repos}/>

      </div>
    );
  }
}

export default App;
