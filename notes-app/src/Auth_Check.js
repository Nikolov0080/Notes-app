import React, {  useState } from 'react';
import UserContext from './context/context';

const AuthCheck = (props) => {

    const [user, setUser] = useState(null);

    const signIn = () => {
        setUser({
            isLogged: true
        })
    }

    const signOut = () => {
        setUser({
            isLogged: false
        })
    }

    return (
        <div>
            <UserContext.Provider value={{
                user,
                signIn,
                signOut
            }}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}

export default AuthCheck
