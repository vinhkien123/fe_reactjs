import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/userSlice'
const rootReducer = {
    userReducer,
}

const store = configureStore({
   reducer: rootReducer,
})

export default store