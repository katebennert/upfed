import React, { useEffect, useContext, useState } from "react";
import NavBar from "./NavBar"
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../context/user";
import Login from "./Login";
import OfferingList from "./OfferingList";
import OfferingPage from "./OfferingPage";
import NewOffering from "./NewOffering";
import Landing from "./Landing";


function Home() {
    const { user, setUser } = useContext(UserContext);
    const [offerings, setOfferings] = useState([]);

    // The initial fetch is still unauthorized after reloading which is not setting offerings until refresh. WHY???

    useEffect(() => {
        // auto-login
        fetch("/me")
            .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, [setUser]);

    if (!user) return <Login />;

    return (
        <>
            <NavBar />
            <main>
                <Switch>
                    <Route path="/offerings/:id">
                        <OfferingPage offerings={offerings} setOfferings={setOfferings}/>
                    </Route>
                    <Route path="/new-offering">
                        <NewOffering offerings={offerings} setOfferings={setOfferings} />
                    </Route>
                    <Route path="/offerings">
                        <OfferingList offerings={offerings} setOfferings={setOfferings}/>
                    </Route>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default Home;