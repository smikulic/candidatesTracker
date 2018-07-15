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

// SHOW
export const candidateShowEnter = (payload) => ({
  type: 'candidate/SHOW_ENTER',
  payload,
})

export const candidateShowLoadSuccess = (payload) => ({
  type: 'candidate/SHOW_LOAD_SUCCESS',
  payload,
})

export const candidateShowLoadFail = (message) => ({
  type: 'candidate/SHOW_LOAD_FAIL',
  message,
})
