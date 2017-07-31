import { takeLatest } from 'redux-saga/effects';
import { fetchImagesSaga, fetchVideosSaga } from './mediaSaga';
import * as types from '../constants/actionTypes';


export function* watchfetchCloudinaryImages() {
  yield takeLatest(types.FETCH_CLOUDINARY_IMAGES, fetchImagesSaga);
}

export function* watchfetchCloudinaryVideos() {
  yield takeLatest(types.FETCH_CLOUDINARY_VIDEOS, fetchVideosSaga);
}
