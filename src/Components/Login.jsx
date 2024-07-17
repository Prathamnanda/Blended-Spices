import React, { useState } from 'react';
import '../index.css'; // Import your CSS file for styling
import Navbar from './Navbar';

const LoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(true); // State to manage sign-in or sign-up view

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <>
        <div className={`container ${isSignIn ? '' : 'active'}`}>
            <div className={`form-container sign-in ${isSignIn ? 'active' : ''}`}>
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="Home" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className={`form-container sign-up ${isSignIn ? '' : 'active'}`}>
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className={`toggle-container ${isSignIn ? '' : 'active'}`}>
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className={`hidden ${isSignIn ? '' : 'active'}`} onClick={toggleForm}>Sign Up</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className={`hidden ${isSignIn ? 'active' : ''}`} onClick={toggleForm}>Sign In</button>
                    </div>
                </div>
            </div>
        </div></>
    );
};

export default LoginPage;
