import React, { useEffect, useContext, useState } from "react";
import NavBar from "./NavBar"
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../context/user";
import Login from "./Login";
import OfferingList from "./OfferingList";
import OfferingPage from "./OfferingPage";


function Home() {
    const { user, setUser } = useContext(UserContext);
    const [offerings, setOfferings] = useState([]);

    useEffect(() => {
        fetch("/offerings")
          .then((r) => r.json())
          .then(setOfferings);
    }, [setOfferings]);
    
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
                    <Route path="/offerings/:id">
                        <OfferingPage offerings={offerings} />
                    </Route>
                {/* <Route path="/new">
                    <NewRecipe user={user} />
                </Route> */}
                    <Route exact path="/">
                        <OfferingList offerings={offerings} />
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default Home;