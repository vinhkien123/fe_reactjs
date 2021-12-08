import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    login : false
}
const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        test: (state, action) => {
            state.push(action.payload)
        }
    }
});

const { reducer, actions } = user;
export const { test } = actions;
export default reducer;