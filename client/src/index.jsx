import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    };
  this.updateRepos = this.updateRepos.bind(this);
  }

  updateRepos (newRepos) {
    this.setState({
      repos: newRepos
    });
  }

  search (username) {
    console.log(`${username} was searched`);
    // TODO
    // POST request to server with username
      // callback in post request to GET new top 25
        // callback in get request to updateRepos
  }

  render () {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos}/>
        <Search onSearch={this.search.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));