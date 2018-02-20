import React, { Component } from 'react';


const Repos = ({ repos }) => {

    if(repos.length=== 0) return "";

    return (

        <div className="repos-wrapper"> {

            repos.map(repo => {
                return (
                    <div className="repo-div">
                        <div className="grid-1">
                            <img src={repo.owner.avatar_url} alt="user-logo" style={{ width: "60px"}}/>
                        </div>
                        <div className="grid-2">
                            <ul>
                                <li>{repo.description}</li>
                                <li>{repo.name}</li>
                                <li>{repo.owner.login}</li>
                            </ul>
                        </div>
                        <div className="grid-3">

                        </div>
                    </div>
                )

            })}
        </div>
    )
}



export default Repos;
