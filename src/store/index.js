import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import counterAuth from './CounterAuthSlice'



const store = configureStore({reducer: {counter: counterReducer},
  reducer:{auth:counterAuth}
});

export default store;
