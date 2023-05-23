import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
// import { Switch, Route } from "react-router-dom";
import Login from "./Login";
// import { UserProvider } from "../context/user";

function App() {
  //use context after get state to work
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <p>
        Logged in
      </p>
      <NavBar user={user} setUser={setUser} />
      {/* <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </main> */}
    </>
  );
}

export default App;
