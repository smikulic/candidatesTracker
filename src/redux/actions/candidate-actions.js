// INDEX
export const candidateIndexEnter = () => ({
  type: 'candidate/INDEX_ENTER',
})

export const candidateIndexLoadSuccess = (payload) => ({
  type: 'candidate/INDEX_LOAD_SUCCESS',
  payload,
})

export const candidateIndexLoadFail = (message) => ({
  type: 'candidate/INDEX_LOAD_FAIL',
  message,
})
