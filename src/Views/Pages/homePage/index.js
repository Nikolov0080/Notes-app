import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../../context/context';
import PageLayout from '../../utils/PageLayout/PageLayout';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Home = () => {

  const context = useContext(UserContext)

  const [user, setUser] = useState(null);

  useEffect(() => {

    setUser(context.user)

  }, [context])


  if (user) {

    return (

      <PageLayout>

        <div>
          <h1>Home Page</h1>
          <br />
          <br />

          <Button size="lg">
            <Link style={{color:"white"}} to="/my-notes">My notes</Link>
          </Button>

          <br />
          <br />
          <br />
          <br />

          <Button size="lg">
            <Link style={{color:"white"}} to="/create-note">Create Note</Link>
          </Button>
          <br />
          <br />
          <br />
          <br />
          <Button onClick={context.signOut}>Sign Out</Button>
        </div>
      </PageLayout>
    )
  } else {

    return (
      <PageLayout>

        <div>
          <h1>Home Page</h1>
          <br />
          <br />

          <Button size="lg">
            <Link style={{color:"white"}} to="/login">Login</Link>
          </Button>

          <br />
          <br />
          <br />
          <br />

          <Button size="lg">
            <Link style={{color:"white"}} to="/register">Register</Link>
          </Button>

        </div>
      </PageLayout>
    )
  }

}

export default Home
