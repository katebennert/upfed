import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
        <h1> NAV </h1>
      {/* <Logo>
        <Link to="/">Reciplease</Link>
      </Logo> */}
      <Nav>
        {/* <Button as={Link} to="/new">
          New Recipe
        </Button> */}
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

export default NavBar;