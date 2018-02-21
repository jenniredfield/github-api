import React from 'react';


const Repos = ({ repos, repoNotFound, loading }) => {

  if(loading) return ( <div className="loading"><div className="loader"></div></div>);
  if(repoNotFound) return ( <div className="repos-not-found"><h2>Sorry, no repos were found!</h2></div>);
  if(repos.length === 0) return '';
   
  return (

    <div className="repos-wrapper"> {

      repos.map((repo, i) => {
        return (
          <div className="repo-div" key={i}>
            <div className="grid-1">
              <a href={repo.owner.html_url}><img src={repo.owner.avatar_url} alt="user-logo" style={{ width: '60px' }} /></a>
            </div>
            <div className="grid-2">
              <ul>
                <li>Name: {repo.name}</li>
                <li>Description: {repo.description}</li>
                <li>Created by: {repo.owner.login}</li>
                <li>Language: {repo.language}</li>
              </ul>
            </div>
            <div className="grid-3">
              <ul>
                <li>Number of forks: {repo.forks_count}</li>
                <li>Stargazers: {repo.stargazers_count}</li>
                <li>Number of issues: {repo.open_issues_count}</li>
                <li><a href={`https://github.com/${repo.full_name}`}><button>{repo.full_name}</button></a></li>
              </ul>
            </div>
          </div>
        );

      })}
    </div>
  );
  
};



export default Repos;
