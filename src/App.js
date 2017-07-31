import React, { Component } from 'react';
import './App.css';
import { isLoggedIn } from './utils/AuthService';
import Upload from './components/Upload';
import CloudinaryVideos from './containers/CloudinaryVideos';
import CloudinaryImages from './containers/CloudinaryImages';
import Callback from './components/Callback';
import { Route, Redirect } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Route  exact path="/" component={CloudinaryVideos}/>
        <Route path="/images" component={CloudinaryImages}/>
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
