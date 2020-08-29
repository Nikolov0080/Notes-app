const isUserLogged = (user) => {

    if (!user) {
        return [
            {
                path: "/",
                name: 'Home'
            },
            {
                path: "/login",
                name: 'Login'
            },
            {
                path: "/register",
                name: 'Register'
            },
        ]
    } else {
        return [
            {
                path: "/",
                name: 'Home'
            },
            {
                path: "/my-notes",
                name: 'My Notes'
            },
        ]
    }
}

export default isUserLogged;