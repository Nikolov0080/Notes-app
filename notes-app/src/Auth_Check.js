import React, { useState } from 'react';
import UserContext from './context/context';
import firebase from 'firebase';

const AuthCheck = (props) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUser(user);
            setLoading(false)
        } else {
            setUser(null);
            setLoading(false)
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

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
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

export default AuthCheck;