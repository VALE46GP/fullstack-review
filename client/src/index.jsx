import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [
        {
          "_id": "5bcb6b24d5cd37a25fdbe9d9",
          "__v": 0,
          "username": "hackreactor",
          "name": "intro-coding",
          "id": 52110598,
          "html_url": "https://www.github.com/repos/hackreactor/intro-coding",
          "updated": "2018-09-09T18:46:37.000Z"
        },
        {
          "_id": "5bcb6b24d5cd37a25fdbe9dd",
          "__v": 0,
          "username": "hackreactor",
          "name": "masters-full-stack",
          "id": 144873541,
          "html_url": "https://www.github.com/repos/hackreactor/masters-full-stack",
          "updated": "2018-09-05T19:27:55.000Z"
        }
      ]
    };
    this.updateRepos = this.updateRepos.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  updateRepos (data) {
    this.setState({
      repos:data
    })
  }

  getRepos () {
    $.get('/repos', (data) => {
      console.log('we out here getting repos', data);
      this.updateRepos(data.results)
    })
  }

  componentWillMount() {
    this.getRepos();
  }

  search (username) {
    console.log(`${username} was searched`);
    $.post('/repos', username)
      .done(() => {
        this.getRepos();
      })
  }

  render () {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <Search onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));