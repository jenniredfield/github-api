import React, { Component } from 'react';
import Repos from './Repos.js'

const Repos = ({repos}) => {
    
    repos = repos.slice(0,10);

    return  repos.map(repo => {
        return (
            <div>
            <ul>
                <li>{repo.description}</li>
                <li>{repo.name}</li>
                <li>{repo.owner.login}</li>
            </ul>
        </div>
        )

    })

}



export default Repos;
