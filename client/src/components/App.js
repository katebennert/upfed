import React from "react";
import Home from "./Home"
import { UserProvider } from "../context/user";

function App() {
  //use context after get state to work

  return (
    <>
    <UserProvider>
      <Home />
    </UserProvider>
    </>
  );
}

export default App;
