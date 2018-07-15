import { ACTION_UNKNOWN, candidatesMock, responseCandidatesMock } from '../../redux-test-helper';
import { candidate as reducer, initialState } from './candidate-reducer';
import { candidateIndexLoadSuccess } from '../actions/candidate-actions';

const stateMock = {
  appState: {
    candidates: candidatesMock,
  },
};

describe('candidate reducer', () => {
  describe('with no given state and an unkown action', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, ACTION_UNKNOWN)).toEqual(initialState);
    });
  });
  describe('with a given state and an unkown action', () => {
    it('returns the given state', () => {
      const expectedState = stateMock;
      const currentState = stateMock;
      expect(reducer(currentState, ACTION_UNKNOWN)).toEqual(expectedState);
    });
  });
  describe('with no given state and a candidateIndexLoadSuccess action', () => {
    it('returns the state with loaded candidates list', () => {
      const action = candidateIndexLoadSuccess(responseCandidatesMock);
      const expectedState = {
        ...initialState,
        candidates: candidatesMock,
      };
      const currentState = initialState;
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });
});
