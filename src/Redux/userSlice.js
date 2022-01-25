import {createSlice} from '@reduxjs/toolkit'
// import { login } from './action/userReducer';

const initialState = {
    login : false
}
const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.login = action.payload
        }
    },
    // extraReducers: {
    //     [login.pending]: (state) => {
    //         state.loading = true
    //     },
    //     [login.rejected]: (state) => {
    //         state.loading = false;
    //         state.error = ''
    //     },
    //     [login.fulfilled]: (state,action) => {
    //        state.login = true
    //     },
    // }
});

const { reducer, actions } = user;
export const {
    loginAction
} = actions;
export default reducer;