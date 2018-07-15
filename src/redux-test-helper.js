export const ACTION_UNKNOWN = {
  type: 'UNKNOWN',
};

export const pendingCandidatesMock = [{
  data: [
    {
      id: '1',
      name: 'Bob Smith',
    },
    {
      id: '2',
      name: 'Bobby Smithy',
    },
    {
      id: '3',
      name: 'Smith Bobby',
    },
  ],
}];

export const consideringCandidatesMock = [
  {
    id: '4',
    name: 'Jane Doe',
  },
  {
    id: '5',
    name: 'Joe Doe',
  },
  {
    id: '6',
    name: 'Joey Doey',
  },
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
