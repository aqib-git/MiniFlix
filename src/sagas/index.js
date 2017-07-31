import { fork } from 'redux-saga/effects';
import {watchfetchCloudinaryImages, watchfetchCloudinaryVideos} from './watcher';

// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* startForman() {
  yield fork(watchfetchCloudinaryImages);
  yield fork(watchfetchCloudinaryVideos);
}
