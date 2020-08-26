import React from 'react'

const UserContext =  React.createContext({
    user: undefined,
    signIn: () => { },
    signOut: () => { }
});

export default UserContext;