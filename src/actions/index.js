import * as types from '../constants/actionTypes';


export function fetchCloudinaryImages() {
  return {
    type: types.FETCH_CLOUDINARY_IMAGES,
  };
}

export function fetchCloudinaryImagesSuccess(images) {
  return {
    type: types.FETCH_CLOUDINARY_IMAGES_SUCCESS,
    images : images
  };
}

export function fetchCloudinaryImagesError(error) {
  return {
    type: types.FETCH_CLOUDINARY_IMAGES_ERROR,
    error : error
  };
}

export function fetchCloudinaryVideos() {
  return {
    type: types.FETCH_CLOUDINARY_VIDEOS,
  };
}

export function fetchCloudinaryVideosSuccess(videos) {
  return {
    type: types.FETCH_CLOUDINARY_VIDEOS_SUCCESS,
    videos : videos
  };
}

export function fetchCloudinaryVideosError(error) {
  return {
    type: types.FETCH_CLOUDINARY_VIDEOS_ERROR,
    error : error
  };
}

export function setTagFilter(tag) {
  return {
    type: types.SET_TAG_FILTER,
    tag : tag
  };
}
