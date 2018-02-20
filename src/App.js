import React, { Component } from 'react';
import './App.css';
import Repos from './Repos.js'

class App extends Component {

  state = {

    userInput: "",
    repos: [],
    repoNotFound: false,

  }


  handleInput = (event) => {


    this.setState({
       userInput: event.target.value,
    })

  }


  fetchRepo = (repo) => {

    
    if(this.state.userInput === "") {
      return;
    }

    repo = this.state.userInput; 

    
    fetch(`https://api.github.com/search/repositories?q=${repo}`)
    .then(res => {
      return res.json();
    }).then(res => {
      // console.log(res)
     if(res.total_count === 0) {
       this.setState({
         repoNotFound: true,
       })
     }

     let sortedResult = res.items.sort((a,b)=> {
          return b.forks_count - a.forks_count;
     })

       this.setState({
         repos : sortedResult,
         repoNotFound: false,
       })
    })

  }


  render() {


    return (
      <div className="App">
        <div className="header-wrapper">
            <h1>Github Repo Finder</h1>
            <small>Displays first 30 repos sorted by the number of forks</small>
    
              <input onChange={this.handleInput} onKeyPress={(event) => { if(event.key === 'Enter') this.fetchRepo() }} placeholder="i.e tetris, hangman etc"></input>
              <button onClick={this.fetchRepo}>Find Repo!</button>
      
        </div>
        <Repos repos={this.state.repos} repoNotFound={this.state.repoNotFound}/>

      </div>
    );
  }
}

export default App;
