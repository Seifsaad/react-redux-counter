import { createSlice, createStore } from '@reduxjs/toolkit';

const initState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});

// const counterReducer = (state = initState, action) => {
//   if (action.type === 'increase') {
//     return { ...state, value: state.value + action.payload };
//   }

//   if (action.type === 'decrease') {
//     return { ...state, value: state.value - action.payload };
//   }

//   if (action.type === 'toggleCounter') {
//     return { ...state, showCounter: !state.showCounter };
//   }

//   return state;
// };

//app init -> run store -> action(non)-> counter reducer -> 0
//user click increase -> action(increase) -> counter reducer -> 1

// value: 0, showCounter: false
//+ return value 1  global value ->

const store = createStore(counterSlice.reducer);

export default store;
