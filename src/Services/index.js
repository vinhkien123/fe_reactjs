import axios from "axios"
import { port } from "../port"


export const createApiBody = async (data, url) => {
    return await axios({
        url: `${port}${url}`,
        method: "POST",
        data
    })
}
export const createApiBodyToken = async (data, url) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        return await axios({
            url: `${port}${url}`,
            method: "POST",
            data,
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
    } else {
        console.log("user is not login");
    }

}
export const createApiBodyTokenNotData = async (url) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        console.log(user.token);
        return await axios({
            url: `${port}${url}`,
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
    } else {
        console.log("user is not login");
    }

}
export const createUploadAvatar = (userid, file) => {
    let data = new FormData();
    data.append('avatar', file);
    data.append('userid', userid);
    return axios({
        url: `${port}api/uploadUser`,
        method: "POST",
        headers: {
            'Content-Type': `multipart/form-data`,
        },
        data
    })
}