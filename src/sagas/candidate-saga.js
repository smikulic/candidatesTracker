import {
  all,
  put,
  call,
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
    const response = yield all([
      call(request, {
        url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates?status=pending',
        method: 'GET',
       }),
       call(request, {
        url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates?status=consider',
        method: 'GET',
       }),
       call(request, {
        url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates?status=consider',
        method: 'GET',
       })
    ]);
      yield put(candidateIndexLoadSuccess(response));
  } catch (e) {
    yield put(candidateIndexLoadFail(e.message));
  }
}

export function* indexCandidateOnEnter() {
  yield takeEvery('candidate/INDEX_ENTER', indexCandidate);
}
