import Swal from "sweetalert2"


export const messageSuccess = (message) => {
    Swal.fire({
        timer: 1500,
        title: message,
        icon: "success",
        showConfirmButton: false,
    })
}
export const messageError = (message) => {
    Swal.fire({
        timer: 1500,
        title: message,
        icon: "error",
        showConfirmButton: false,
    })
}