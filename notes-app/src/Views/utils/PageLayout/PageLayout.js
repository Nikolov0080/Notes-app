import React from 'react'
import NavBar from '../../components/navBar/index';

const PageLayout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default PageLayout;
