export const authenticate = ({user}) => {
    if (window != undefined) {
        console.log(user)
        const user = localStorage.setItem("user",JSON.stringify(user))
    }
}