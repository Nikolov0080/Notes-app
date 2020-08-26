import React from 'react'
import PageLayout from '../../utils/PageLayout/PageLayout';
import LoginForm from '../../../Controllers/login/index';

const Login = () => {
    return (
        <div>
            <PageLayout>
                <h1>Login page</h1>
                <LoginForm />
            </PageLayout>
        </div>
    )
}

export default Login