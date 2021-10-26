import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const SignUp = () => {
    const { handleRegistration, handlePasswordChange, handleEmailChange, error, handleGoogleSignIn } = useFirebase()

    return (
        <div className="login-form">
            <Form className=' form mx-auto mt-4'>
                <h2>Create Account</h2>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </FloatingLabel>

                <Button onClick={handleRegistration} variant="primary" className="mt-3  login-button">
                    Submit
                </Button>
                <br />
                <div>{error}</div>

                <Button onClick={handleGoogleSignIn} variant="primary" className="mt-3 login-button">
                    Google Sign In
                </Button>
                <p><small>Already Have an Account? <Link className="text-decoration-none" to='/login'>Login</Link></small></p>
            </Form>

        </div>
    );
};

export default SignUp;