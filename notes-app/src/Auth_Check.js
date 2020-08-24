import React, { useState } from 'react';
import UserContext from './context/context';
import firebase from 'firebase';



const AuthCheck = (props) => {

    const [user, setUser] = useState(null);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    const signIn = (userData) => {
        setUser(userData)
    }

    const signOut = () => {
        firebase.auth().signOut().then(resp => {
            setUser(null);
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
