import React, { Component } from 'react';
import './App.css';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';
import Upload from './components/Upload';
import DisplayVideos from './components/DisplayVideos';
import DisplayImages from './components/DisplayImages';
import Callback from './components/Callback';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={browserHistory}>
          <Route path="/" component={DisplayVideos}/>
          <Route path="/images" component={DisplayImages}/>
          <Route path="/upload" component={Upload} onEnter={requireAuth} />
          <Route path="/callback" component={Callback} />
        </Router>
    </div>
    );
  }
}

export default App;
