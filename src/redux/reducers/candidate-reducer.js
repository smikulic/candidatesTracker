export const initialState = {
  candidates: {
    pending: [],
    considering: [],
    onHold: [],
  },
};

export const candidate = (state = initialState, action) => {
  switch (action.type) {
    case 'candidate/INDEX_LOAD_SUCCESS':
      return {
        ...state,
        candidates: {
          pending: action.payload[0].data,
          considering: action.payload[1].data,
          onHold: action.payload[2].data,
        },
      };
    default:
      return state;
  }
}

export default candidate;
