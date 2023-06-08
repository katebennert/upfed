import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "../App.css"

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
        <img className="logo" src="https://i.imgur.com/pDinA3g.png" alt="UpFed Logo" />
        <div className="login-page-flexbox">
            <div className="sign-up-in-container">
                {showSignUp ? (
                    <>
                        <SignUpForm />
                    <p>
                        Already have an account? &nbsp;
                        <button className="sign-up-in-btn" onClick={() => setShowSignUp(false)}>
                            Log in 
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <LoginForm />
                    <p>
                        Need an UpFed account? &nbsp;
                        <button className="sign-up-in-btn" onClick={() => setShowSignUp(true)}>
                            Sign Up
                        </button>
                    </p>
                </>
            )}
            </div>

            <div className="welcome-container">
                <h1>Welcome to UpFed!</h1>
                <h3>We're a community of fed-up parents with too much stuff. Login or sign-up to trade the stuff your kid needed last month for the stuff they'll need next month.</h3>
            </div>

         </div>
    </>
  );
}

export default Login;