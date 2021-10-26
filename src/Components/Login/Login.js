import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { handleLogin, handlePasswordChange, handleEmailChange, error, handleGoogleSignIn } = useFirebase()
    return (
        <div className="login-form">
            <Form className='mx-auto mt-4 form'>
                <h2>Please Login</h2>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Your Email" />
                </FloatingLabel>
                <FloatingLabel onBlur={handlePasswordChange} controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder=" Your Password" />
                </FloatingLabel>


                <Button onClick={handleLogin} variant="primary" type="submit" className="mt-3 login-button ">Login</Button>
                <div>{error}</div>


                <Button onClick={handleGoogleSignIn} variant="primary" className="mt-3 login-button ">
                    Google Sign In
                </Button>
                <p><small>New to Deshi? <Link className="text-decoration-none" to='/signUp'>Create Account</Link></small></p>
            </Form>
        </div>





    );
};

export default Login;