import React from "react";
import Home from "./Home";
import { UserProvider } from "../context/user";
import "../App.css"


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
