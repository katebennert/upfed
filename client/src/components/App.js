import React from "react";
import Home from "./Home"
import { UserProvider } from "../context/user";

function App() {

  return (
    <>
      <UserProvider>
        <Home />
      </UserProvider>
    </>
  );
}

export default App;
