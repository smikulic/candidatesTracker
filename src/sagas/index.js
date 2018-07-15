import { fork } from 'redux-saga/effects';
import {
  indexCandidateOnEnter,
  showCandidateOnEnter,
} from './candidate-saga';

export default function * root () {

  yield fork(indexCandidateOnEnter);
  yield fork(showCandidateOnEnter);
}
