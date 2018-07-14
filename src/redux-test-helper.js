export const ACTION_UNKNOWN = {
  type: 'UNKNOWN',
};

export const candidateMock = {
  id: '1',
  name: 'Bob Smith',
};

export const candidateMock2 = {
  id: '2',
  name: 'Jane Doe',
};

export const candidatesMock = [candidateMock, candidateMock2];

export const responseCandidatesMock = {
  data: candidatesMock,
};

export const getCandidatesMock = {
  url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates',
  method: 'GET',
}
