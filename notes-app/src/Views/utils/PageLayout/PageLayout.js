import React from 'react'
import NavBar from '../../components/navBar/index';
import { Container } from 'react-bootstrap';

const PageLayout = (props) => {
    return (
        <div>
            <NavBar />
            <Container className="text-center">
            {props.children}
            </Container>
        </div>
    )
}

export default PageLayout;
