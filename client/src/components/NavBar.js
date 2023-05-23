import React, { useContext } from "react";
import { UserContext } from "../context/user";
//import { Link } from "react-router-dom";

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
        <h1> NAV </h1>
      {/* <Logo>
        <Link to="/">Reciplease</Link>
      </Logo> */}
      <div>
        {/* <Button as={Link} to="/new">
          New Recipe
        </Button> */}
        <button onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;