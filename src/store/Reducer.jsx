import ACTIONS from "./Actions";
import { DATA_ACTIONS } from "../utils/actionHelpers";
const Reducer = (state, action) => {
  return action.type
    ? ACTIONS[action.type](state, action)
    : ACTIONS[DATA_ACTIONS.DEFAULT](state);
};

export default Reducer;
