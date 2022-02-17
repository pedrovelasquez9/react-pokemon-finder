const ACTIONS = {
  SET_DATA: (state, action) => {
    return {
      ...state,
      data: action.payload,
      error: null,
    };
  },
  ADD_DATA: (state, action) => {
    return {
      ...state,
      data: state.data.concat(action.payload),
      error: null,
    };
  },
  REMOVE_DATA: (state, action) => {
    return {
      ...state,
      data: state.data.filter((item) => item.id !== action.payload),
      error: null,
    };
  },
  SET_ERROR: (state, action) => {
    return {
      ...state,
      error: action.payload,
    };
  },
  DEFAULT: (state) => {
    return state;
  },
};

export default ACTIONS;
