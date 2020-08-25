import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import Input from '../../Views/components/input';
import firebaseRegister from '../../Models/authentication/register';

const Register = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const submitForm = (data) => {
        firebaseRegister(data.email, data.password).then(response => {
            console.log(response.user);
        })
    }

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit(submitForm)}>
                {errors.email && errors.email.type === 'required' && <p>Email is required</p>}
                {errors.password && errors.password.type === 'required' && <p>password is required</p>}
                {errors.rePassword && errors.rePassword.type === 'required' && <p>Repeat password is required</p>}
                {errors.rePassword && errors.rePassword.type === 'validate' && <p>Password and Repeat password must match</p>}
                {errors.password && errors.password.type === 'minLength' && <p>password must be 6 characters long</p>}

                <Input
                    name="email"
                    id="a"
                    type="email"
                    label="Email"
                    reg={register({
                        required: true
                    })}
                />
                <Input
                    name="password"
                    type="password"
                    id="b"
                    label="Password"
                    reg={register({
                        required: true,
                        minLength: 6
                    })}
                />
                <Input
                    name="rePassword"
                    type="password"
                    id="c"
                    label="Repeat password"
                    reg={register({
                        required: true,
                        validate: (value) => {
                            return value === watch('password')
                        }
                    })}
                />
                <br />
                <Button type="submit">Register</Button>
            </form>
        </div>
    )
}

export default Register;