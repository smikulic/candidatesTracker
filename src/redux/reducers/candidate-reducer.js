export const initialState = {
  candidates: {
    pending: [],
    considering: [],
    onHold: [],
  },
  candidate: {},
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
    case 'candidate/SHOW_LOAD_SUCCESS':
      return {
        ...state,
        candidate: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default candidate;
