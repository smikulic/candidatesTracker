export const initialState = {
  candidates: [],
};

export const candidate = (state = initialState, action) => {
  switch (action.type) {
    case 'candidate/INDEX_LOAD_SUCCESS':
      return {
        ...state,
        candidates: [
          ...action.payload,
        ],
      };
    default:
      return state;
  }
}

export default candidate;
