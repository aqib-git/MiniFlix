import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  selectedTag : 'miniflix',
  images : [],
  videos : []
};


function selectedTag(state = initialState.selectedTag, action) {
  switch(action.type) {
    case types.SET_TAG_FILTER :
      return action.tag;
    break;
    default:
      return state;
  }
}

function images(state = initialState.images, action) {
  switch(action.type) {
    case types.FETCH_CLOUDINARY_IMAGES_SUCCESS :
      return action.images;
    break;
    default:
      return state;
  }
}

function videos(state = initialState.videos, action) {
  switch(action.type) {
    case types.FETCH_CLOUDINARY_VIDEOS_SUCCESS :
      return action.videos;
    break;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  selectedTag,
  images,
  videos
});

export default rootReducer;
