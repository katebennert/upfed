import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../context/user";


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((u) => setUser(u));
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}> 
        <div className="form-group">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="sign-up-in-btn" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
        <div className="errors-container">
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      </div>
    </form>
  </div>
  );
}

export default LoginForm;