import { all, call, put } from 'redux-saga/effects';
import { request } from '../lib/api';
import history from '../lib/history';
import {
  candidateMock,
  getCandidateMock,
  responseCandidateMock,
  responseCandidatesMock,
  getOnHoldCandidatesMock,
  getPendingCandidatesMock,
  getConsideringCandidatesMock,
} from '../redux-test-helper';
import {
  candidateIndexLoadSuccess,
  candidateShowLoadSuccess,
  candidateIndexLoadFail,
  candidateShowLoadFail,
} from '../redux/actions/candidate-actions';
import {
  showCandidate,
  indexCandidate,
} from './candidate-saga';

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
  // SHOW
  describe('showCandidate ', () => {
    describe('when data is fetched successfully', () => {
      let iterator = showCandidate(candidateMock.id);
      it('performs and API call to get the candidate entity', () => {
        actualYield = iterator.next().value;
        expectedYield = call(request, getCandidateMock);
        expect(actualYield).toEqual(expectedYield);
      });
      it('stores candidates list in the state', () => {
        actualYield = iterator.next(responseCandidateMock).value;
        expectedYield = put(candidateShowLoadSuccess(responseCandidateMock.data));
        expect(actualYield).toEqual(expectedYield);
      });
      it('redirects to candidate show page', () => {
        actualYield = iterator.next().value;
        expectedYield = call(history.push, `/candidate/${candidateMock.id}`);
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
    describe('when data is not fetched successfully', () => {
      let iterator = showCandidate(candidateMock.id);
      it('performs and API call to get the candidate entity', () => {
        actualYield = iterator.next().value;
        expectedYield = call(request, getCandidateMock);
        expect(actualYield).toEqual(expectedYield);
      });
      it('triggers candidateIndexLoadFail action', () => {
        actualYield = iterator.next().value;
        expectedYield = put(candidateShowLoadFail(`Cannot read property 'data' of undefined`));
        expect(actualYield).toEqual(expectedYield);
      });
      it('it should be done', () => {
        expect(iterator.next().done).toEqual(true);
      });
    });
  });
});
