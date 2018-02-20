import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {

    userInput: "",

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
      console.log(res);
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


      </div>
    );
  }
}

export default App;
