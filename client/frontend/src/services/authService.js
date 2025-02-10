export const handleLogin = (e, email, password, role) => {
    e.preventDefault()
    try {
        if (!role || !email || !password){
            return alert("Please Provide All Fields")
        }
            console.log("login", e, email, password, role)
    } catch (error) {
        console.log(error)
    }
}
export const handleRegister = (
    e,
    email,
    password,
    role,
    organisationName,
    hospitalName,
    website,
    address,
    phone
) => {
    e.preventDefault()
    try {
        console.log("register", e,
            email,
            password,
            role,
            organisationName,
            hospitalName,
            website,
            address,
            phone)
    } catch (error) {
        console.error(error)
    }
}