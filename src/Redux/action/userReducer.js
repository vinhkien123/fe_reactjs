import { createAsyncThunk } from "@reduxjs/toolkit"
import Swal from "sweetalert2"
import { messageError, messageSuccess } from "../../commons/message"
import { createApiBody } from "../../Services"
import { loginAction } from "../userSlice"
const arrayAdmin = [1]


// export const login = createAsyncThunk('user/login', async (data, thunkAPI) => {
//     try {
//             let res = await createApiBody(data, `api/user/loginemail`)
//             let flag = false
//             arrayAdmin.forEach(e => {
//                 if (res?.data?.data?.id == e) flag = true
//             })
//             messageSuccess(res.data.message)
//             // dispatch(getVideo(res?.data ? .data ? .array))

//         } catch (error) {
//             messageError(error.response.data.message)
//          }
// })
export const login = (data, navigate) => {
    return async (dispatch) => {
        try {
            let res = await createApiBody(data, `api/user/loginemail`)
            // let flag = false
            // arrayAdmin.forEach(e => {
            //     if (res?.data?.data?.id == e) flag = true
            // })
            const dataRes = JSON.stringify(res.data.data)
            localStorage.setItem('user',dataRes)
            dispatch(loginAction(true))
            navigate('/dashboard')
            messageSuccess(res.data.message)
            // dispatch(getVideo(res?.data ? .data ? .array))

        } catch (error) {
            console.log(error.response);
            messageError(error.response.data.message)
         }
    }
}