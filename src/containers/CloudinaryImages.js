import React, {Component} from 'react';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { connect } from 'react-redux';
import {fetchCloudinaryImages} from '../actions';
import DisplayImages from '../components/DisplayImages';

class CloudinaryImages extends Component{

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    return(<DisplayImages images={this.props.images}/>);
  }
}

const mapStateToProps = state => {
  return {
    images : state.images
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: () => {
      dispatch(fetchCloudinaryImages());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CloudinaryImages);
