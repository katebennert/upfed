import React, { useEffect, useContext } from "react";
import NavBar from "./NavBar"
// import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import { UserContext } from "../context/user";

function Home() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, [setUser]);
 
    if (!user) return <Login />;

    return (
        <>
            <p>
                Hello, {user.username}!
            </p>
            <NavBar />
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
    )
}

export default Home;