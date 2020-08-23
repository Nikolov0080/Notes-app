import React, { useContext } from 'react'
import UserContext from '../../../context/context';

const Home = () => {

  const context = useContext(UserContext)

  

console.log(context)

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={context.signIn}>Sign In</button>
      <button onClick={context.signOut}>Sign Out</button>

    </div>
  )
}

export default Home
