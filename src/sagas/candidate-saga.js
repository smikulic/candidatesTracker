import {
  all,
  put,
  call,
  take,
  takeEvery,
} from 'redux-saga/effects';
import { request } from '../lib/api';
import history from '../lib/history';
import {
  candidateIndexLoadSuccess,
  candidateShowLoadSuccess,
  candidateIndexLoadFail,
  candidateShowLoadFail,
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
        url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates?status=suspended',
        method: 'GET',
      })
    ]);
    if (response) {
      yield put(candidateIndexLoadSuccess(response));
    } else {
      yield put(candidateIndexLoadFail('No response for all requests'));
    }
  } catch (e) {
    yield put(candidateIndexLoadFail(e.message));
  }
}

export function* indexCandidateOnEnter() {
  yield takeEvery('candidate/INDEX_ENTER', indexCandidate);
}

// SHOW
export function* showCandidate(candidateId) {
  try {
     const response = yield call(request, {
       url: `https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates/${candidateId}`,
       method: 'GET',
      });
     yield put(candidateShowLoadSuccess(response.data));
     yield call(history.push, `/candidate/${candidateId}`);
  } catch (e) {
    yield put(candidateShowLoadFail(e.message));
  }
}

export function* showCandidateOnEnter() {
  while (true) {
    const { payload } = yield take('candidate/SHOW_ENTER');
    if (payload) {
      yield call(showCandidate, payload);
    }
  }
}
