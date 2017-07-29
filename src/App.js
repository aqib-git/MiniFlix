import React, { Component } from 'react';
import './App.css';
import { isLoggedIn } from './utils/AuthService';
import Upload from './components/Upload';
import DisplayVideos from './components/DisplayVideos';
import DisplayImages from './components/DisplayImages';
import Callback from './components/Callback';
import { Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Route  exact path="/" component={DisplayVideos}/>
        <Route path="/images" component={DisplayImages}/>
        <PrivateRoute path="/upload" component={Upload} />
        <Route path="/callback" component={Callback} />
    </div>
    );
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default App;
