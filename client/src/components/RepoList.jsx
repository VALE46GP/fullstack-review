import React from 'react';

const RepoList = (props) => (
  <div>
    <h3> 25 Most Recently Updated Repos </h3>
    There are {props.repos.length} repos.
  </div>
);

export default RepoList;