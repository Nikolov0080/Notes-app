import React from 'react'
import PageLayout from '../../utils/PageLayout/PageLayout';
import RegisterForm from '../../../Controllers/register/index';

const Register = () => {
    return (
        <div>
            <PageLayout>

                <h1>Register Page</h1>
                <RegisterForm />
            </PageLayout>
        </div>
    )
}

export default Register
