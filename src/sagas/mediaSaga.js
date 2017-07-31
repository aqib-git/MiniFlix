import * as types from '../constants/actionTypes';
import { call, put} from 'redux-saga/effects';
import {fetchCloudinaryImages, fetchCloudinaryVideos} from '../Api/api.js';


export function* fetchImagesSaga(action) {
  try {
    const response = yield call(fetchCloudinaryImages);
    yield put({
      type: types.FETCH_CLOUDINARY_IMAGES_SUCCESS,
      images : response
    });
   } catch (e) {
    yield put({
      type: types.FETCH_CLOUDINARY_IMAGES_ERROR,
      error: e
    });
   }
}

export function* fetchVideosSaga(action) {
  try {
    const response = yield call(fetchCloudinaryVideos);
    yield put({
      type: types.FETCH_CLOUDINARY_VIDEOS_SUCCESS,
      videos : response
    });
   } catch (e) {
      yield put({
        type: types.FETCH_CLOUDINARY_VIDEOS_ERROR,
        error: e
      });
   }
}
