import { legacy_createStore } from "redux";

const initState = { value: 0, showCounter: false };
const counterReducer = (state = initState, action) => {
  if (action.type === "increase") {
    return { ...state, value: state.value + action.payload };
  }

  if (action.type === "decrease") {
    return { ...state, value: state.value - action.payload };
  }

  if (action.type === "toggleCounter") {
    return { ...state, showCounter: !state.showCounter };
  }
  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
