import React from 'react';
import { FloatingLabel, Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {

    const{handleLogin,handlePasswordChange,handleEmailChange,error,handleGoogleSignIn}=useFirebase()
    return (
        <Form className='w-50 mx-auto mt-4'>
            <h2>Please Login</h2>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
            <Form.Control  onBlur={handleEmailChange} type="email" placeholder="Your Email" />
            </FloatingLabel>
            <FloatingLabel onBlur={handlePasswordChange} controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder=" Your Password" />
            </FloatingLabel>

           
           <Button onClick={handleLogin}  variant="primary" type="submit" className="mt-3">Login</Button>
           <div>{error}</div>


            <Button onClick={handleGoogleSignIn} variant="primary"  className="mt-3">
                Google Sign In
            </Button>
            <p><small>New to Deshi? <Link className="text-decoration-none"  to='/signUp'>Create Account</Link></small></p>
        </Form>


        


    );
};

export default Login;