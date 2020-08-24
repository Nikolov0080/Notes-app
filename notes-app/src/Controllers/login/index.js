import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../../Views/components/input/index';
import { Button } from 'react-bootstrap';
import firebaseLogin from "../../Models/authentication/login";

const LoginForm = () => {

    const { register, handleSubmit, errors } = useForm();

    const submitForm = (data) => {
        firebaseLogin(data.email, data.password).then(response => {
            console.log(response)
        }).catch(e => console.log(e));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>

                {errors.password && errors.password.type === "minLength" && <p>Password too short</p>}

                <Input
                    name="email"
                    type="email"
                    reg={register}
                    id="a"
                    label="Email"
                />

                <Input
                    name="password"
                    reg={register({ minLength: 6 })}
                    type="password"
                    id="b"
                    label="Password"
                />
                <br />
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;