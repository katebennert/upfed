import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";

function NavBar() {
   const { user, setUser } = useContext(UserContext);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav className="navbar">
      <div className="left-section">
        <NavLink to={`/`}><img className="home-link-logo" src="https://i.imgur.com/pDinA3g.png" alt="UpFed Logo" /></NavLink>
        <span className="greeting">Hello, {user.username}!</span>
      </div>
        <ul className="nav-links">
          <li><NavLink to={`/offerings`} className="nav-link">View Offerings</NavLink></li>
          <li><NavLink to={`/new-offering`} className="nav-link">Create an Offering</NavLink></li>
          <li><button onClick={handleLogoutClick} className="logout-button">Logout</button></li>
        </ul>
    </nav>
  );
}

export default NavBar;