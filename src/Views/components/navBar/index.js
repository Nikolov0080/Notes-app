import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../../context/context';
import isUserLogged from './navItems';

const NavBar = () => {

    const context = useContext(UserContext);

    const navItems = isUserLogged(context.user);

    return (
        <div  className="container text-center mt-3 mb-3">
            <Row  className="justify-content-md-center">
                {navItems.map((item, index) => {
                    return (
                        <Col  xs lg="2" key={index}>
                            <Link style={{fontSize:'20px'}} to={item.path}>{item.name}</Link>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default NavBar
