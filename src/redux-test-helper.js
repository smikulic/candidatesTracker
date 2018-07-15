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

export const pendingCandidatesMock = [{
  data: [
    candidateMock,
  ],
}];

export const consideringCandidatesMock = [
  candidateMock,
  candidateMock2,
];

export const candidatesMock = {
  pending: pendingCandidatesMock,
  considering: consideringCandidatesMock,
  onHold: consideringCandidatesMock,
};

export const responseCandidatesMock = [
  {
    data: pendingCandidatesMock,
  },
  {
    data: consideringCandidatesMock,
  },
  {
    data: consideringCandidatesMock,
  },
];
export const responseCandidateMock = [{
  data: candidateMock,
}];

export const getPendingCandidatesMock = {
  url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates?status=pending',
  method: 'GET',
}
export const getConsideringCandidatesMock = {
  url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates?status=consider',
  method: 'GET',
}
export const getOnHoldCandidatesMock = {
  url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates?status=suspended',
  method: 'GET',
}

export const getCandidateMock = {
  url: 'https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates/1',
  method: 'GET',
}
