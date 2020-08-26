import React, { useState } from 'react';
import UserContext from './context/context';
import firebase from 'firebase';
import { Spinner } from 'react-bootstrap';
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
            <div className="text-center" style={{ marginTop: '45%' }}>

                <Spinner  variant="primary" size="lg" animation="border" role="status">
                    <span className="sr-only">sa</span>

                </Spinner>
                <h4>Loading...</h4>
            </div>
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