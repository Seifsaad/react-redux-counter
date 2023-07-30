import {createSlice} from '@reduxjs/toolkit';

const authState = { toggleShow: false};
const authSlice= createSlice({
    name:auth,
    initialState:authState,
    reducers: {
        toggleShow: (state) => {
            state.toggleShow =!state.toggleShow;
        }
    }
})
export const { toggleShow } = authSlice.actions;