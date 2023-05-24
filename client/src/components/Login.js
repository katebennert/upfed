import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Wrapper, OuterBox} from "../styles";
import "../App.css"

function Login() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <>
        <img className="logo" src="https://i.imgur.com/pDinA3g.png" alt="UpFed Logo" />
        <OuterBox>
            <h1>Welcome to UpFed!</h1>
            <h3>We're a community of fed-up parents with too much stuff. Sign up now and trade the stuff your kid needed last month for the stuff they'll need next month.</h3>
    {showSignUp ? (
        <>
            <Wrapper>
            <SignUpForm />
            <p>
                Already have an account? &nbsp;
                <button onClick={() => setShowSignUp(false)}>
                    Log in 
                </button>
            </p>
            </Wrapper>
        </>
        ) : (
        <>
            <Wrapper>
            <LoginForm />
            <p>
                Don't have an account? &nbsp;
                <button onClick={() => setShowSignUp(true)}>
                    Sign Up
                </button>
            </p>
            </Wrapper>
        </>
      )}
      
    </OuterBox>
    </>
  );
}

export default Login;