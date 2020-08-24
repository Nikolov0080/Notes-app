import React, { useContext } from 'react'
import UserContext from '../../../context/context';
import PageLayout from '../../utils/PageLayout/PageLayout';


const Home = () => {

  const context = useContext(UserContext)

  return (
    <PageLayout>

    <div>
      <h1>Home Page</h1>

      <button onClick={context.signIn}>Sign In</button>
      <button onClick={context.signOut}>Sign Out</button>

    </div>
    </PageLayout>
  )
}

export default Home
