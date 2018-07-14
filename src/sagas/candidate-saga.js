import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { request } from '../lib/api';
import {
  candidateIndexLoadSuccess,
  candidateIndexLoadFail,
} from '../redux/actions/candidate-actions';

// INDEX
export function* indexCandidate() {
  try {
     const response = yield call(request, {
       url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates',
       method: 'GET',
      });
      yield put(candidateIndexLoadSuccess(response.data));
  } catch (e) {
    yield put(candidateIndexLoadFail(e.message));
  }
}

export function* indexCandidateOnEnter() {
  yield takeEvery('candidate/INDEX_ENTER', indexCandidate);
}
