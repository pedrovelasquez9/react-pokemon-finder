const ACTIONS = {
  SET_DATA: (state, action) => {
    return {
      ...state,
      data: action.payload,
      status: FETCH_STATUS.SUCCESS,
      error: null,
    };
  },
  ADD_DATA: (state, action) => {
    return {
      ...state,
      data: state.data.concat(action.payload),
      status: FETCH_STATUS.SUCCESS,
      error: null,
    };
  },
  REMOVE_DATA: (state, action) => {
    return {
      ...state,
      status: FETCH_STATUS.SUCCESS,
      data: state.data.filter((item) => item.id !== action.payload),
      error: null,
    };
  },
  SET_DATA_ERROR: (state, action) => {
    return {
      ...state,
      status: FETCH_STATUS.ERROR,
      error: action.payload,
    };
  },
  DEFAULT_DATA: (state) => {
    return state;
  },
};

const FETCH_STATUS = {
  ERROR: "error",
  IDLE: "idle",
  SUCCESS: "success",
  PENDING: "pending",
  LOADING: "loading",
};

export { ACTIONS, FETCH_STATUS };
