import { fork } from 'redux-saga/effects';
import { indexCandidateOnEnter} from './candidate-saga';

export default function * root () {

  yield fork(indexCandidateOnEnter);
}
