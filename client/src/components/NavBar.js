import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";

function NavBar() {
   const { setUser } = useContext(UserContext);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
        <NavLink to={`/`}><button>Home</button></NavLink>
        <NavLink to={`/new-offering`}><button>Create an Offering</button></NavLink>
        <NavLink to={`/offerings`}><button>View Offerings</button></NavLink>
        <button onClick={handleLogoutClick}>
          Logout
        </button>
      
    </div>
  );
}

export default NavBar;