import React, { useEffect, useContext } from "react";
import NavBar from "./NavBar"
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../context/user";
import Login from "./Login";
import OfferingList from "./OfferingList";

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
            <main>
                <Switch>
                {/* <Route path="/new">
                    <NewRecipe user={user} />
                </Route> */}
                <Route path="/">
                    <OfferingList />
                </Route>
                </Switch>
            </main>
        </>
    )
}

export default Home;