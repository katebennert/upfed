import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "../App.css"

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
        <img className="logo" src="https://i.imgur.com/pDinA3g.png" alt="UpFed Logo" />
        <div className="login-page-container">
            <div className="sign-in-forms-container">
                {showSignUp ? (
                    <>
                        <SignUpForm />
                    <p>
                        Already have an account? &nbsp;
                        <span className="sign-up-login-switch" onClick={() => setShowSignUp(false)}>
                            Login here.
                        </span>
                    </p>
                </>
            ) : (
                <>
                    <LoginForm />
                    <p>
                        Need an UpFed account? &nbsp;
                        <span className="sign-up-login-switch" onClick={() => setShowSignUp(true)}>
                            Sign up here.
                        </span>
                    </p>
                </>
            )}
            </div>

            <div className="welcome-container">
                <h1>Welcome to UpFed!</h1>
                <h3>Are you a fed-up parent with too much stuff? Sign up to trade the stuff your kid needed last month for the stuff they'll need next month.</h3>
            </div>

         </div>
    </>
  );
}

export default Login;