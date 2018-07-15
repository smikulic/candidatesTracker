import { all, call, put } from 'redux-saga/effects';
import { request } from '../lib/api';
import {
  candidatesMock,
  responseCandidatesMock,
  getOnHoldCandidatesMock,
  getPendingCandidatesMock,
  getConsideringCandidatesMock,
} from '../redux-test-helper';
import {
  candidateIndexLoadSuccess,
  candidateIndexLoadFail,
} from '../redux/actions/candidate-actions';
import { indexCandidate } from './candidate-saga';

let actualYield;
let expectedYield;

describe('candidate saga', () => {
  // INDEX
  describe('indexCandidate ', () => {
    describe('when data is fetched successfully', () => {
      let iterator = indexCandidate();
      it('performs and parallel API call to get the candidates list', () => {
        actualYield = iterator.next().value;
        expectedYield = all([
          call(request, getPendingCandidatesMock),
          call(request, getConsideringCandidatesMock),
          call(request, getOnHoldCandidatesMock)
        ]);
        expect(actualYield).toEqual(expectedYield);
      });
      it('stores candidates list in the state', () => {
        actualYield = iterator.next(responseCandidatesMock).value;
        expectedYield = put(candidateIndexLoadSuccess(responseCandidatesMock));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when data is not fetched successfully', () => {
      let iterator = indexCandidate();
      it('performs and API call to get the candidates list', () => {
        actualYield = iterator.next().value;
        expectedYield = all([
          call(request, getPendingCandidatesMock),
          call(request, getConsideringCandidatesMock),
          call(request, getOnHoldCandidatesMock)
        ]);
        expect(actualYield).toEqual(expectedYield);
      });
      it('triggers candidateIndexLoadFail action', () => {
        actualYield = iterator.next().value;
        expectedYield = put(candidateIndexLoadFail('No response for all requests'));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
  });
});
