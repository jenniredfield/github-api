import React, { Component } from 'react';


const Repos = ({repos}) => {

    

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
