import React, { Component } from 'react';


const Repos = ({ repos }) => {

    if (repos.length === 0) return "";

    return (

        <div className="repos-wrapper"> {

            repos.map(repo => {
                return (
                    <div className="repo-div">
                        <div className="grid-1">
                            <img src={repo.owner.avatar_url} alt="user-logo" style={{ width: "60px" }} />
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
                            </ul>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}



export default Repos;
