import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";


function Login() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <>
      <h1>Welcome to UpFed!</h1>
      <h3>We're a community of fed-up parents with too much stuff. Sign up now and trade the stuff your kid needed last month for the stuff they'll need next month.</h3>
      {showSignUp ? (
        <>
            <SignUpForm />
            <p>
                Already have an account? &nbsp;
                <button onClick={() => setShowSignUp(false)}>
                    Log in 
                </button>
            </p>
        </>
        ) : (
        <>

            <LoginForm />
            <p>
                Don't have an account? &nbsp;
                <button onClick={() => setShowSignUp(true)}>
                    Sign Up
                </button>
            </p>
        </>
      )}
    </>
  );
}

export default Login;