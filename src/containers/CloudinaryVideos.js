import React, {Component} from 'react';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { connect } from 'react-redux';
import {fetchCloudinaryVideos} from '../actions';
import DisplayVideos from '../components/DisplayVideos';

class CloudinaryVideos extends Component{

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return(<DisplayVideos videos={this.props.videos}/>);
  }
}

const mapStateToProps = state => {
  return {
    videos : state.videos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: () => {
      dispatch(fetchCloudinaryVideos());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CloudinaryVideos);
