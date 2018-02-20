import React, { Component } from 'react';
import './App.css';
import Repos from './Repos.js'

class App extends Component {

  state = {

    userInput: "",
    respos: [],

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
       this.setState({
         repos : res,
       })
    })

  }


  render() {
    return (
      <div className="App">
        <h1>Github Repo Finder</h1>
        <div className="wrapper">
            <input onChange={this.handleInput}></input>
            <button onClick={this.fetchRepo}>Find Repo!</button>
        </div>
        <Repos repos={this.state.repos}/>

      </div>
    );
  }
}

export default App;
