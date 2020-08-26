import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../../context/context';
import PageLayout from '../../utils/PageLayout/PageLayout';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';


const Home = () => {

  const context = useContext(UserContext)

  const [user, setUser] = useState(null);

  useEffect(() => {

    setUser(context.user)

  }, [context])


  if (user) {

    return (

      <PageLayout>

        <div className="text-center">
          <h1>Home Page</h1>


          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Button style={{ width: "100%", marginTop:'2em' }} size="lg">
                <Link style={{ color: "white" }} to="/my-notes">My notes</Link>
              </Button>
            </Col>
            <Col md="auto">
              <Button style={{ width: "100%", marginTop:'2em' }} size="lg">
                <Link style={{ color: "white" }} to="/create-note">Create Note</Link>
              </Button>
            </Col>
            <Col xs lg="2">
              <Button size="lg" style={{ width: "100%", marginTop:'2em' }} onClick={context.signOut}>Sign Out</Button>
            </Col>
          </Row>

        </div>
      </PageLayout>
    )
  } else {

    return (
      <PageLayout>

        <div >
          <h1>Home Page</h1>
          <Col style={{ marginTop: "20%" }} className="justify-content-md-center" >
            <Row >
              <Button style={{ width: "100%", marginTop:'2em' }} size="lg">
                <Link style={{ color: "white" }} to="/login">Login</Link>
              </Button>
            </Row>
            <Row>
              <Button style={{ width: "100%", marginTop:'2em' }} size="lg">
                <Link style={{ color: "white" }} to="/register">Register</Link>
              </Button>
            </Row>
          </Col>
        </div>
      </PageLayout>
    )
  }

}

export default Home
