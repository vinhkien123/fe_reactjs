import { createApiBody } from "../../Services"
const arrayAdmin = [1]


export const login = (data) => {
    return async (dispatch) => {
        try {
            let res = await createApiBody(data, `api/user/loginemail`)
            let flag = false
            arrayAdmin.forEach(e => {
                if (res?.data?.data?.id == e) flag = true
            })
            console.log(res)
            // dispatch(getVideo(res?.data ? .data ? .array))

        } catch (error) {
            
         }
    }
}