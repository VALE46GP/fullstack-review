import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h3> {props.repos.length} Most Recently Updated Repos </h3>
    {
      props.repos.map( r => <Repo data={r}/> )
    }
  </div>
);

export default RepoList;